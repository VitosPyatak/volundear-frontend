import { FC } from 'react';
import classes from './styles.module.scss';
import { CardWrapperProps } from './types';

export const CardWrapper: FC<CardWrapperProps> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};
