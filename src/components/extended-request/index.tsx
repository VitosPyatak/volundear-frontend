import { volunteerRequestHttpProvider } from 'api/volunteer-request-provider';
import { AssigneesCard } from 'components/assignees-card';
import { CommentsCard } from 'components/comments-card';
import { ExtendedRequestCard } from 'components/extended-request-card';
import { useCurrentUser } from 'context/current-user';
import { withHeading } from 'hoc/with-heading';
import { RequestModel } from 'models/request';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doesIncludeUser } from 'utils/user';
import { mockComments } from './mock';
import classes from './styles.module.scss';

const ExtendedRequest: FC = () => {
  const [request, setRequest] = useState<RequestModel>();

  const { requestId } = useParams();
  const { currentUser } = useCurrentUser();

  useEffect(() => {
    if (requestId) {
      volunteerRequestHttpProvider.getById(requestId).then((response) => {
        setRequest(response);
      });
    }
  }, []);

  const addAssignee = () => {
    if (currentUser && request && !doesIncludeUser(request.assignees, currentUser)) {
      volunteerRequestHttpProvider.addAssignee(request._id, currentUser._id);
      setRequest({ ...request, assignees: [...request.assignees, currentUser] });
    }
  };

  return (
    <div className={classes.container}>
      {request && (
        <>
          <div className={classes.requestAndChatContainer}>
            <ExtendedRequestCard addRequestAssignee={addAssignee} request={request} />
            <CommentsCard comments={mockComments} />
          </div>
          <div className={classes.assignees}>
            <AssigneesCard request={request} />
          </div>
        </>
      )}
    </div>
  );
};

export default withHeading(ExtendedRequest, { heading: 'Request details', withFloatingAction: true, withBackButton: true });
