import { VolunteerRequestCategory } from './volunteer-request-category';
import { VolunteerRequestStatus } from './volunteer-request-status';

export type IconSwitchProps = {
  icons: IconEnum[];
  selectedIconId: IconEnum;
  setSelectedIcon: (id: IconEnum) => void;
};

export enum IconEnum {
  dashboard = 'dashboard',
  search = 'search',
  account = 'account',
  paw = 'paw',
  car = 'car',
  check = 'check',
  edit = 'edit',
  pencil = 'pencil',
  verified = 'verified',
  unverified = 'unverified',
  military = 'military',
  file = 'file',
  playerPlay = 'playerPlay',
  playerPause = 'playerPause',
}

export const iconsTitleMapping: Record<IconEnum, string> = {
  dashboard: 'Home',
  search: 'Search',
  account: 'Account',
  paw: 'Animals',
  car: 'Transportation',
  check: 'Done',
  edit: 'Edit',
  pencil: 'Create',
  verified: 'Verified',
  unverified: 'Unverified',
  military: 'Military',
  file: 'Other',
  playerPlay: 'Active',
  playerPause: 'On hold',
};

export enum IconType {
  search,
}

export const requestCategoryIconsMapping: Record<VolunteerRequestCategory, IconEnum> = {
  military: IconEnum.military,
  animals: IconEnum.paw,
  transportation: IconEnum.car,
  other: IconEnum.file,
};

export const requestStatusIconsMapping: Record<VolunteerRequestStatus, IconEnum> = {
  active: IconEnum.playerPlay,
  onHold: IconEnum.playerPause,
  closed: IconEnum.check,
};
