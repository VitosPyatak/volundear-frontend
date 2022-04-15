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
}
