import { FC } from 'react';
import { IconProps } from './types';

export const PlusIcon: FC<IconProps> = ({ size }) => {
  const iconSize = size || 24;

  return (
    <svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M5 12H19M12 5V19V5Z' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
    </svg>
  );
};
