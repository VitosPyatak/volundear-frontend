import { cloneElement, FC, useMemo } from 'react';
import classes from './styles.module.scss';
import { IconWrapperProps } from './types';

export const IconWrapper: FC<IconWrapperProps> = ({ isSelected, children, setSelectedIcon, iconId }) => {
  const containerClass = useMemo(() => (isSelected ? classes.selectedContainer : classes.container), [isSelected]);

  const onWrapperClicked = () => {
    setSelectedIcon(iconId);
  };

  return (
    <div onClick={onWrapperClicked} className={containerClass}>
      <div className={classes.iconWrapper}>{cloneElement(children, { isSelected })}</div>
    </div>
  );
};
