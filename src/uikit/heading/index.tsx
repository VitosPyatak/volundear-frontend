import { HeadingProps, WithHeadingProps } from 'hoc/with-heading/types';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { FloatingActionButton } from 'uikit/floating-action-button';
import { ArrowLeftIcon } from 'uikit/icons/arrow-left.icon';
import classes from './styles.module.scss';

export const Heading: FC<HeadingProps> = ({ children, withBackButton, withFloatingAction, heading }) => {
  const navigate = useNavigate();

  const onBackButtonPressed = () => {
    navigate(-1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.button} onClick={onBackButtonPressed}>
          {withBackButton && <ArrowLeftIcon />}
        </div>
        <span className={classes.heading}>{heading}</span>
      </div>
      {children}
      {withFloatingAction && <FloatingActionButton />}
    </div>
  );
};
