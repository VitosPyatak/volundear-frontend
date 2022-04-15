import { colors } from 'configs/colors';
import { useMemo } from 'react';

export const useIconColor = (isSelected?: boolean) => {
  return useMemo(() => (isSelected ? colors.white : colors.accent), [isSelected]);
};
