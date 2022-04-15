import { FC } from 'react';
import { appIconsMapping } from 'uikit/icon-switch/configs';
import classes from './styles.module.scss';
import { SimpleIconSwitchProps } from './types';

export const SimpleIconSwitch: FC<SimpleIconSwitchProps> = ({ icons }) => {
  return <div className={classes.container}>{icons.map((icon) => appIconsMapping[icon])}</div>;
};
