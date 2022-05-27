import { useIconColor } from 'hooks/useIconColor';
import { FC } from 'react';
import { IconProps } from './types';

export const DashboardIcon: FC<IconProps> = ({ isSelected }) => {
  const color = useIconColor(isSelected);

  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M19 8.71001L13.667 4.56201C13.199 4.19792 12.623 4.00024 12.03 4.00024C11.4371 4.00024 10.861 4.19792 10.393 4.56201L5.05903 8.71001C4.73847 8.9593 4.47912 9.27854 4.30078 9.64336C4.12245 10.0082 4.02984 10.4089 4.03003 10.815V18.015C4.03003 18.5454 4.24074 19.0542 4.61582 19.4292C4.99089 19.8043 5.4996 20.015 6.03003 20.015H18.03C18.5605 20.015 19.0692 19.8043 19.4442 19.4292C19.8193 19.0542 20.03 18.5454 20.03 18.015V10.815C20.03 9.99201 19.65 9.21501 19 8.71001Z'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M16 15C13.79 16.333 10.208 16.333 8 15'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
