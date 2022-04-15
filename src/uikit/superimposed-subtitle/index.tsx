import { FC } from 'react';
import classes from './styles.module.scss';
import { CreatedByProps } from './types';

export const SuperimposedSubtitle: FC<CreatedByProps> = ({ title, subtitle, large, horizontal }) => {
  const containerClass = horizontal ? classes.horizontal : classes.container;
  const subtitleClass = large ? classes.largeSubtitle : classes.subtitle;
  const titleClass = large ? classes.largeTitle : classes.title;

  return (
    <div className={containerClass}>
      <span className={subtitleClass}>
        {subtitle}
        {horizontal && ':'}
      </span>
      <span className={titleClass}>{title}</span>
    </div>
  );
};
