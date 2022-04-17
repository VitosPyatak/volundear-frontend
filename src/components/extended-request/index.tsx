import { volunteerRequestHttpProvider } from 'api/volunteer-request-provider';
import { AssigneesCard } from 'components/assignees-card';
import { CommentsCard } from 'components/comments-card';
import { ExtendedRequestCard } from 'components/extended-request-card';
import { withHeading } from 'hoc/with-heading';
import { RequestModel } from 'models/request';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockComments, mockExtendedRequest } from './mock';
import classes from './styles.module.scss';

const ExtendedRequest: FC = () => {
  const [request, setRequest] = useState<RequestModel>();

  const { requestId } = useParams();

  useEffect(() => {
    if (requestId) {
      volunteerRequestHttpProvider.getById(requestId).then((response) => {
        setRequest(response);
      });
    }
  }, []);

  return (
    <div className={classes.container}>
      {request && (
        <>
          <div className={classes.requestAndChatContainer}>
            <ExtendedRequestCard request={request} />
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
