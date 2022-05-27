import { FC } from 'react';
import { OutlinedIconButtonProps } from './types';
import classes from './styles.module.scss';
import { appIconsMapping } from 'uikit/icon-switch/configs';

export const OutlinedIconButton: FC<OutlinedIconButtonProps> = ({ title, onClick, icon }) => {
  return (
    <div onClick={onClick} className={classes.container}>
      {icon && appIconsMapping[icon]}
      <span className={classes.title}>{title}</span>
    </div>
  );
};
