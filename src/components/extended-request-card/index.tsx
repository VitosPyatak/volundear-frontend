import { FC } from 'react';
import { CardTitle } from 'uikit/card-title';
import { CardWrapper } from 'uikit/card-wrapper';
import { ExtendedRequestCardProps } from './types';
import classes from './styles.module.scss';
import { SuperimposedSubtitle } from 'uikit/superimposed-subtitle';
import { formatUsername } from 'utils/formatUsername';
import { SimpleButton } from 'uikit/buttons/simple';
import { OutlinedIconsSwitch } from 'uikit/outlined-icons-switch';
import { requestCategoryIconsMapping, requestStatusIconsMapping } from 'types/icons';
import { formatRequestDate } from 'utils/formatDate';

export const ExtendedRequestCard: FC<ExtendedRequestCardProps> = ({ request, addRequestAssignee }) => {
  return (
    <CardWrapper largePadding>
      <CardTitle title={request.title} />
      <div className={classes.requestDataContainer}>
        <div className={classes.dateAndOwnerContainer}>
          <SuperimposedSubtitle title={formatUsername(request.owner)} subtitle='Created by' horizontal large />
          <SuperimposedSubtitle title={formatRequestDate(request.createdAt)} subtitle='Date' horizontal large />
        </div>
        <OutlinedIconsSwitch icons={[requestCategoryIconsMapping[request.category], requestStatusIconsMapping[request.status]]} />
      </div>

      <SuperimposedSubtitle large title={request.description} />

      <div className={classes.buttonContainer}>
        <SimpleButton large title='Apply' onClick={addRequestAssignee} />
      </div>
    </CardWrapper>
  );
};
