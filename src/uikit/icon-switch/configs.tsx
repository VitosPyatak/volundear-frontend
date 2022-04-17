import { appRoutes } from 'configs/routes';
import { AccountIcon } from 'uikit/icons/account.icon';
import { CarIcon } from 'uikit/icons/car.icon';
import { CheckIcon } from 'uikit/icons/check.icon';
import { DashboardIcon } from 'uikit/icons/dashboard.icon';
import { EditIcon } from 'uikit/icons/edit.icons';
import { PawIcon } from 'uikit/icons/paw.icon';
import { PencilIcon } from 'uikit/icons/pencil.icon';
import { SearchIcon } from 'uikit/icons/search.icon';
import { UnverifiedIcon } from 'uikit/icons/unverified.icon';
import { VerifiedIcon } from 'uikit/icons/verified.icon';
import { IconEnum } from '../../types/icons';

export const appIconsMapping: Record<IconEnum, JSX.Element> = {
  [IconEnum.account]: <AccountIcon />,
  [IconEnum.dashboard]: <DashboardIcon />,
  [IconEnum.search]: <SearchIcon />,
  [IconEnum.paw]: <PawIcon />,
  [IconEnum.car]: <CarIcon />,
  [IconEnum.check]: <CheckIcon />,
  [IconEnum.edit]: <EditIcon />,
  [IconEnum.pencil]: <PencilIcon />,
  [IconEnum.verified]: <VerifiedIcon />,
  [IconEnum.unverified]: <UnverifiedIcon />,
};

export const appIconsToRoutesMapping: Partial<Record<IconEnum, string>> = {
  [IconEnum.account]: appRoutes.account,
  [IconEnum.search]: appRoutes.search,
  [IconEnum.dashboard]: appRoutes.home,
};
