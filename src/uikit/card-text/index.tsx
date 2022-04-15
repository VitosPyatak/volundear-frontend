import { FC } from 'react';
import { appIconsMapping } from 'uikit/icon-switch/configs';
import classes from './styles.module.scss';
import { CardTextProps } from './types';

export const CardText: FC<CardTextProps> = ({ text, icon }) => {
  return (
    <div className={classes.container}>
      <span className={classes.medium}>{text}</span>
      {icon && appIconsMapping[icon]}
    </div>
  );
};
