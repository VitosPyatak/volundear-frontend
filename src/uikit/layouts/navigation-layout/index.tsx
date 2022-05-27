import { NavigationLogo } from './navigation-logo';
import { NavigationTabs } from './navigation-tabs';
import classes from './styles.module.scss';
import { NavigationLayoutProps } from './types';

export const NavigationLayout = ({ children }: NavigationLayoutProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.navigationLayout}>
          <NavigationLogo />
          <NavigationTabs />
        </div>
        {children}
      </div>
    </div>
  );
};
