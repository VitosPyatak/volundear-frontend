import { FC } from 'react';
import { iconsTitleMapping } from 'types/icons';
import { appIconsMapping } from 'uikit/icon-switch/configs';
import { Tooltip } from 'uikit/tooltip';
import classes from './styles.module.scss';
import { SimpleIconSwitchProps } from './types';

export const SimpleIconSwitch: FC<SimpleIconSwitchProps> = ({ icons, withTooltip }) => {
  return (
    <div className={classes.container}>
      {icons.map((icon) => {
        return withTooltip ? <Tooltip content={iconsTitleMapping[icon]}>{appIconsMapping[icon]}</Tooltip> : appIconsMapping[icon];
      })}
    </div>
  );
};
