import { FC } from 'react';
import classes from './styles.module.scss';
import { SimpleButtonProps } from './types';

export const SimpleButton: FC<SimpleButtonProps> = ({ title, onClick }) => {
  return (
    <div onClick={onClick} className={classes.container}>
      <span className={classes.title}>{title}</span>
    </div>
  );
};
