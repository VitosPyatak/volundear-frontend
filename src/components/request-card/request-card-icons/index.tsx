import { FC } from 'react';
import { IconEnum } from 'types/icons';
import { SimpleIconSwitch } from 'uikit/simple-icon-switch';
import { RequestCardIconsProps } from './types';
import classes from './styles.module.scss';
import { SimpleButton } from 'uikit/buttons/simple';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from 'configs/routes';

export const RequestCardIcons: FC<RequestCardIconsProps> = ({ request }) => {
  const navigate = useNavigate();

  const onButtonClicked = () => {
    navigate(appRoutes.extended.template(request._id));
  };

  return (
    <div className={classes.container}>
      <SimpleIconSwitch icons={[IconEnum.paw, IconEnum.check]} />
      <SimpleButton onClick={onButtonClicked} title='Details' />
    </div>
  );
};
