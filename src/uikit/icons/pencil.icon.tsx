import { useIconColor } from 'hooks/useIconColor';
import { FC } from 'react';
import { IconProps } from './types';

export const PencilIcon: FC<IconProps> = ({ size }) => {
  const color  = useIconColor()
  const iconSize = size || 15;

  return (
    <svg width={iconSize} height={iconSize} viewBox={`0 0 15 15`} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M8 3.99998L11 6.99998M1 14H4L12.5 5.49998C12.8978 5.10216 13.1213 4.56259 13.1213 3.99998C13.1213 3.43737 12.8978 2.89781 12.5 2.49998C12.1022 2.10216 11.5626 1.87866 11 1.87866C10.4374 1.87866 9.89782 2.10216 9.5 2.49998L1 11V14Z'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
