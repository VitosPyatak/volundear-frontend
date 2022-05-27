import { FC, useState } from 'react';
import classes from './styles.module.scss';
import { TooltipProps } from './type';

export const Tooltip: FC<TooltipProps> = ({ children, content }) => {
  const [isActive, setActivityStatus] = useState(false);

  const toggleActivityStatus = () => setActivityStatus(!isActive);

  return (
    <div className={classes.container} onMouseEnter={toggleActivityStatus} onMouseLeave={toggleActivityStatus}>
      {children}
      {isActive && <div className={classes.tooltip}>{content}</div>}
    </div>
  );
};
