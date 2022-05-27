import { FC } from 'react';
import classes from './styles.module.scss';
import { SubheaderSectionProps } from './types';

export const SubheaderSection: FC<SubheaderSectionProps> = ({ children, title }) => {
  return (
    <div className={classes.container}>
      <span className={classes.subheader}>{title}</span>
      {children}
    </div>
  );
};
