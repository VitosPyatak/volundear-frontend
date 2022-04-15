import { FC } from 'react';
import { CardTitleProps } from 'uikit/card-title/types';
import classes from './styles.module.scss';

export const CardDescription: FC<CardTitleProps> = ({ title }) => {
  return <span className={classes.text}>{title}</span>;
};
