import { FC } from 'react';
import { IconWrapper } from 'uikit/icon-wrapper';
import { appIconsMapping } from './configs';
import classes from './styles.module.scss';
import { IconEnum, IconSwitchProps } from './types';

export const IconSwitch: FC<IconSwitchProps> = ({ selectedIconId, setSelectedIcon, icons, withRedirect }) => {
  const createWrapperProps = (iconId: IconEnum) => {
    const isSelected = iconId === selectedIconId;
    return { setSelectedIcon, iconId, isSelected, withRedirect };
  };

  return (
    <div className={classes.container}>
      {icons.map((icon) => (
        <IconWrapper {...createWrapperProps(icon)}>{appIconsMapping[icon]}</IconWrapper>
      ))}
    </div>
  );
};
