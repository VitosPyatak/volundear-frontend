import { IconEnum, IconType } from 'types/icons';

export type IconWrapperProps = {
  isSelected: boolean;
  setSelectedIcon: (id: IconEnum) => void;
  iconId: IconEnum;
  iconType?: IconType;
};

export type WrappedIconProps = {
  isSelected: boolean;
  iconId: IconEnum;
};
