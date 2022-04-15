import { appRoutes } from 'configs/routes';
import { cloneElement, FC, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { appIconsToRoutesMapping } from 'uikit/icon-switch/configs';
import classes from './styles.module.scss';
import { IconWrapperProps } from './types';

export const IconWrapper: FC<IconWrapperProps> = ({ isSelected, children, setSelectedIcon, iconId, withRedirect }) => {
  const containerClass = useMemo(() => (isSelected ? classes.selectedContainer : classes.container), [isSelected]);
  const navigate = useNavigate();

  const onWrapperClicked = () => {
    setSelectedIcon(iconId);
    if (withRedirect) navigate(appIconsToRoutesMapping[iconId] || appRoutes.home);
  };

  return (
    <div onClick={onWrapperClicked} className={containerClass}>
      <div className={classes.iconWrapper}>{cloneElement(children, { isSelected })}</div>
    </div>
  );
};
