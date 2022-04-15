import { FC } from 'react';
import classes from './styles.module.scss';
import { CardImageProps } from './types';

export const CardImage: FC<CardImageProps> = ({ url, small }) => {
  const container = small ? classes.smallContainer : classes.imageContainer;

  return (
    <div className={container}>
      <img src={url} className={classes.image} />
    </div>
  );
};
