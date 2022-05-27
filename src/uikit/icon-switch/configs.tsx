import { appRoutes } from 'configs/routes';
import { AccountIcon } from 'uikit/icons/account.icon';
import { CarIcon } from 'uikit/icons/car.icon';
import { CheckIcon } from 'uikit/icons/check.icon';
import { DashboardIcon } from 'uikit/icons/dashboard.icon';
import { EditIcon } from 'uikit/icons/edit.icons';
import { FileIcon } from 'uikit/icons/file.icon';
import { MilitaryIcon } from 'uikit/icons/military.icon';
import { PawIcon } from 'uikit/icons/paw.icon';
import { PencilIcon } from 'uikit/icons/pencil.icon';
import { PlayerPauseIcon } from 'uikit/icons/player-pause.icon';
import { PlayerPlayIcon } from 'uikit/icons/player-play.icon';
import { SearchIcon } from 'uikit/icons/search.icon';
import { UnverifiedIcon } from 'uikit/icons/unverified.icon';
import { VerifiedIcon } from 'uikit/icons/verified.icon';
import { IconEnum } from '../../types/icons';

export const appIconsMapping: Record<IconEnum, JSX.Element> = {
  account: <AccountIcon />,
  dashboard: <DashboardIcon />,
  search: <SearchIcon />,
  paw: <PawIcon />,
  car: <CarIcon />,
  check: <CheckIcon />,
  edit: <EditIcon />,
  pencil: <PencilIcon />,
  verified: <VerifiedIcon />,
  unverified: <UnverifiedIcon />,
  military: <MilitaryIcon />,
  file: <FileIcon />,
  playerPlay: <PlayerPlayIcon />,
  playerPause: <PlayerPauseIcon />,
};

export const appIconsToRoutesMapping: Partial<Record<IconEnum, string>> = {
  account: appRoutes.account,
  search: appRoutes.search,
  dashboard: appRoutes.home,
};
