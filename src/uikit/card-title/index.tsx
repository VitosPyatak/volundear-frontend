import { Size } from 'configs/size.types';
import { FC } from 'react';
import classes from './styles.module.scss';
import { CardTitleProps } from './types';

export const CardTitle: FC<CardTitleProps> = ({ title, size }) => {
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

  return <span className={getTextClass()}>{title}</span>;
};
