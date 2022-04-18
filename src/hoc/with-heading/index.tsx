import { ComponentType } from 'react';

import { Heading } from 'uikit/heading';
import { WithHeadingProps } from './types';

export const withHeading = (Component: ComponentType, props: WithHeadingProps) => {
  return (
    <Heading {...props}>
      <Component />
    </Heading>
  );
};
