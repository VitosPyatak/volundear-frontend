import { ComponentType } from 'react';
import { useNavigate } from 'react-router-dom';

import { Heading } from 'uikit/heading';
import { WithHeadingProps } from './types';

export const withHeading = (Component: ComponentType, props: WithHeadingProps) => {
  return (
    <Heading {...props}>
      <Component />
    </Heading>
  );
};
