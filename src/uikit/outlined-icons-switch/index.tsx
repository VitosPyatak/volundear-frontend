import { FC } from 'react';
import { OutlinedIconsSwitchProps } from './types';
import classes from './styles.module.scss';
import { OutlinedIconButton } from 'uikit/buttons/outlined-icon-button';
import { iconsTitleMapping } from 'types/icons';

export const OutlinedIconsSwitch: FC<OutlinedIconsSwitchProps> = ({ icons }) => {
  return (
    <div className={classes.container}>
      {icons.map((icon) => {
        return <OutlinedIconButton icon={icon} title={iconsTitleMapping[icon]} />;
      })}
    </div>
  );
};
