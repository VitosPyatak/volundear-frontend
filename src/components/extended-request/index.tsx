import { AssigneesCard } from 'components/assignees-card';
import { ExtendedRequestCard } from 'components/extended-request-card';
import { withHeading } from 'hoc/with-heading';
import { FC } from 'react';
import { mockExtendedRequest } from './mock';
import classes from './styles.module.scss';
import { ExtendedRequestProps } from './types';

const ExtendedRequest: FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.requestAndChatContainer}>
        <ExtendedRequestCard request={mockExtendedRequest} />
      </div>
      <div className={classes.assignees}>
        <AssigneesCard request={mockExtendedRequest} />
      </div>
    </div>
  );
};

export default withHeading(ExtendedRequest, { heading: 'Request details', withFloatingAction: true, withBackButton: true });
