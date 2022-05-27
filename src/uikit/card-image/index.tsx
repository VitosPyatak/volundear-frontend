import { Size } from 'configs/size.types';
import { FC } from 'react';
import classes from './styles.module.scss';
import { CardImageProps } from './types';

export const CardImage: FC<CardImageProps> = ({ url, size }) => {
  const getContainer = () => {
    if (size === Size.large) return classes.imageContainer;
    else if (size === Size.medium) return classes.mediumContainer;
    return classes.smallContainer;
  };

  return (
    <div className={getContainer()}>
      <img src={url} className={classes.image} />
    </div>
  );
};
