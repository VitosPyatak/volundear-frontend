import { FC } from 'react';
import classes from './styles.module.scss';
import { CardImageProps } from './types';

export const CardImage: FC<CardImageProps> = ({ url }) => {
  return (
    <div className={classes.imageContainer}>
      <img src={url} className={classes.image} />
    </div>
  );
};
