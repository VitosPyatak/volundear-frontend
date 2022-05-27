import { Size } from 'configs/size.types';
import { FC } from 'react';
import { appIconsMapping } from 'uikit/icon-switch/configs';
import classes from './styles.module.scss';
import { CardTitleProps } from './types';

export const CardTitle: FC<CardTitleProps> = ({ title, size, icon }) => {
  const getTextClass = () => {
    switch (size) {
      case Size.small:
        return classes.small;
      case Size.medium:
        return classes.medium;
      default:
        return classes.large;
    }
  };

  return (
    <div className={classes.container}>
      <span className={getTextClass()}>{title}</span>
      {icon && appIconsMapping[icon]}
    </div>
  );
};
