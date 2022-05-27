import { FC } from 'react';
import classes from './styles.module.scss';
import { CardWrapperProps } from './types';

export const CardWrapper: FC<CardWrapperProps> = ({ children, largePadding, horizontal }) => {
  const containerClass = largePadding ? classes.largePadding : classes.container;
  const direction = horizontal ? classes.horizontal : classes.vertical;

  return <div className={`${containerClass} ${direction}`}>{children}</div>;
};
