import { FC } from 'react';
import classes from './styles.module.scss';
import { CardWrapperProps } from './types';

export const CardWrapper: FC<CardWrapperProps> = ({ children, largePadding }) => {
  const containerClass = largePadding ? classes.largePadding : classes.container;

  return <div className={containerClass}>{children}</div>;
};
