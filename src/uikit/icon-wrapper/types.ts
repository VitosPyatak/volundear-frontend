import { IconEnum } from 'types/icons';

export type IconWrapperProps = {
  isSelected: boolean;
  children: JSX.Element;
  setSelectedIcon: (id: IconEnum) => void;
  iconId: IconEnum;
};
