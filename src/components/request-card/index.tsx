import classes from './styles.module.scss';
import { CardWrapper } from 'uikit/card-wrapper';
import { CardTitle } from 'uikit/card-title';
import { Size } from 'configs/size.types';
import { FC } from 'react';
import { RequestCardProps } from './types';
import { CardDescription } from 'uikit/card-description';
import { SuperimposedSubtitle } from '../../uikit/superimposed-subtitle';
import { formatUsername } from 'utils/formatUsername';
import { mockedDate } from './mock';
import { RequestCardIcons } from './request-card-icons';
import { formatRequestDate } from 'utils/formatDate';

export const RequestCard: FC<RequestCardProps> = ({ request, size }) => {
  return (
    <CardWrapper>
      <CardTitle size={size || Size.small} title={request.title} />

      <CardDescription title={request.description} />

      <div className={classes.subinfoContainer}>
        <SuperimposedSubtitle subtitle='Created by' title={formatUsername(request.owner)} />
        <SuperimposedSubtitle subtitle='Date' title={formatRequestDate(request.createdAt)} />
      </div>

      <div className={classes.subinfoContainer}>
        <RequestCardIcons request={request} />
      </div>
    </CardWrapper>
  );
};
