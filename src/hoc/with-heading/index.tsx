import { ComponentType } from 'react';
import { FloatingActionButton } from 'uikit/floating-action-button';
import classes from './styles.module.scss';
import { WithHeadingProps } from './types';

export const withHeading = (Component: ComponentType, { heading, withFloatingAction }: WithHeadingProps) => {
  return (
    <div className={classes.container}>
      <span className={classes.heading}>{heading}</span>
      <Component />
      {withFloatingAction && <FloatingActionButton />}
    </div>
  );
};
