export type IconSwitchProps = {
  icons: IconEnum[];
  selectedIconId: IconEnum;
  setSelectedIcon: (id: IconEnum) => void;
  withRedirect?: boolean;
};

export enum IconEnum {
  dashboard,
  search,
  account,
}
