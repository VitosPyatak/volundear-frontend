import { FC } from 'react';
import classes from './styles.module.scss';
import { CreatedByProps } from './types';

export const SuperimposedSubtitle: FC<CreatedByProps> = ({ title, subtitle }) => {
  return (
    <div className={classes.container}>
      <span className={classes.subtitle}>{subtitle}</span>
      <span className={classes.title}>{title}</span>
    </div>
  );
};
