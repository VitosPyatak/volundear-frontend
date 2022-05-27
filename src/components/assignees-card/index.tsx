import { FC } from 'react';
import { IconEnum } from 'types/icons';
import { CardImage } from 'uikit/card-image';
import { CardText } from 'uikit/card-text';
import { CardTitle } from 'uikit/card-title';
import { CardWrapper } from 'uikit/card-wrapper';
import { formatUsername } from 'utils/formatUsername';
import { getVerificationIcon } from 'utils/getVerificationIcon';
import classes from './styles.module.scss';
import { AssigneesProps } from './types';

export const AssigneesCard: FC<AssigneesProps> = ({ request }) => {
  return (
    <CardWrapper>
      <CardTitle title='Assignees' />

      <div className={classes.assignees}>
        {request.assignees?.map((assignee) => (
          <div className={classes.user}>
            <CardImage url={assignee.profilePicture} />
            <CardText text={formatUsername(request.owner)} icon={getVerificationIcon(request.owner)} />
          </div>
        ))}
      </div>
    </CardWrapper>
  );
};
