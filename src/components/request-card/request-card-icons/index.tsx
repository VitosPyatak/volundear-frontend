import { FC } from 'react';
import { IconEnum } from 'types/icons';
import { SimpleIconSwitch } from 'uikit/simple-icon-switch';
import { RequestCardIconsProps } from './types';
import classes from './styles.module.scss';
import { SimpleButton } from 'uikit/buttons/simple';

export const RequestCardIcons: FC<RequestCardIconsProps> = ({ request }) => {
  return (
    <div className={classes.container}>
      <SimpleIconSwitch icons={[IconEnum.paw, IconEnum.check]} />
      <SimpleButton title='Details' />
    </div>
  );
};
