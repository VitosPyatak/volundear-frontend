import { FC } from 'react';
import classes from './styles.module.scss';
import { SimpleButtonProps } from './types';

export const SimpleButton: FC<SimpleButtonProps> = ({ title, onClick, large }) => {
  const titleClass = large ? classes.largeTitle : classes.title;

  return (
    <div onClick={onClick} className={classes.container}>
      <span className={titleClass}>{title}</span>
    </div>
  );
};
