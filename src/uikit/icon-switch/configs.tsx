import { appRoutes } from 'configs/routes';
import { AccountIcon } from 'uikit/icons/account.icon';
import { DashboardIcon } from 'uikit/icons/dashboard.icon';
import { SearchIcon } from 'uikit/icons/search.icon';
import { IconEnum } from './types';

export const appIconsMapping: Record<IconEnum, JSX.Element> = {
  [IconEnum.account]: <AccountIcon />,
  [IconEnum.dashboard]: <DashboardIcon />,
  [IconEnum.search]: <SearchIcon />,
};

export const appIconsToRoutesMapping: Partial<Record<IconEnum, string>> = {
  [IconEnum.account]: appRoutes.account,
  [IconEnum.search]: appRoutes.search,
  [IconEnum.dashboard]: appRoutes.home,
};
