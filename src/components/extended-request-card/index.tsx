import { FC } from 'react';
import { CardTitle } from 'uikit/card-title';
import { CardWrapper } from 'uikit/card-wrapper';
import { ExtendedRequestCardProps } from './types';

export const ExtendedRequestCard: FC<ExtendedRequestCardProps> = ({ request }) => {
  return (
    <CardWrapper>
      <CardTitle title={request.title} />
    </CardWrapper>
  );
};
