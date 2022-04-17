import { cloneElement, FC, useMemo } from 'react';
import { IconType } from 'types/icons';
import { appIconsMapping } from 'uikit/icon-switch/configs';
import classes from './styles.module.scss';
import { IconWrapperProps, WrappedIconProps } from './types';

const DefaultIcon: FC<WrappedIconProps> = ({ isSelected, iconId }) => {
  return cloneElement(appIconsMapping[iconId], { isSelected });
};

const SearchIcon: FC<WrappedIconProps> = ({ iconId, isSelected }) => {
  const icon = cloneElement(appIconsMapping[iconId]);

  return isSelected ? (
    <div className={classes.inputContainer}>
      <input className={classes.input} placeholder='Search volunteers and requests...'/>
      {icon}
    </div>
  ) : (
    icon
  );
};

export const IconWrapper: FC<IconWrapperProps> = ({ iconId, setSelectedIcon, isSelected, iconType }) => {
  const containerClass = useMemo(
    () => (isSelected && iconType !== IconType.search ? classes.selectedContainer : classes.container),
    [isSelected]
  );

  const newProps: WrappedIconProps = { isSelected, iconId };

  const getIcon = () => {
    if (iconType === IconType.search) return <SearchIcon {...newProps} />;
    return <DefaultIcon {...newProps} />;
  };

  return (
    <div onClick={() => setSelectedIcon(iconId)} className={containerClass}>
      {getIcon()}
    </div>
  );
};
