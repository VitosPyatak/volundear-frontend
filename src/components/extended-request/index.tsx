import { AssigneesCard } from 'components/assignees-card';
import { CommentsCard } from 'components/comments-card';
import { ExtendedRequestCard } from 'components/extended-request-card';
import { withHeading } from 'hoc/with-heading';
import { FC } from 'react';
import { mockComments, mockExtendedRequest } from './mock';
import classes from './styles.module.scss';

const ExtendedRequest: FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.requestAndChatContainer}>
        <ExtendedRequestCard request={mockExtendedRequest} />
        <CommentsCard comments={mockComments} />
      </div>
      <div className={classes.assignees}>
        <AssigneesCard request={mockExtendedRequest} />
      </div>
    </div>
  );
};

export default withHeading(ExtendedRequest, { heading: 'Request details', withFloatingAction: true, withBackButton: true });
