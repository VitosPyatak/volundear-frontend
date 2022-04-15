import { ComponentType } from 'react';
import classes from './styles.module.scss';

export const withHeading = (Component: ComponentType, heading: string) => {
  return (
    <div className={classes.container}>
      <span className={classes.heading}>{heading}</span>
      <Component />
    </div>
  );
};
