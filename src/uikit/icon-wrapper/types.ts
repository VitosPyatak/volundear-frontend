import { IconEnum, IconSwitchProps } from 'uikit/icon-switch/types';

export type IconWrapperProps = {
  isSelected: boolean;
  children: JSX.Element;
  setSelectedIcon: (id: IconEnum) => void;
  iconId: IconEnum;
  withRedirect?: boolean;
};
