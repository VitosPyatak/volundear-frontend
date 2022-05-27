import { volunteerRequestHttpProvider } from 'api/volunteer-request-provider';
import { mockedAccountRequests } from 'components/account/mock';
import { Requests } from 'components/requests';
import { withHeading } from 'hoc/with-heading';
import { RequestModel } from 'models/request';
import { useEffect, useState } from 'react';

const Home = () => {
  const [requests, setRequests] = useState<RequestModel[]>([]);

  useEffect(() => {
    volunteerRequestHttpProvider.getRequests({ limit: '0', page: '0' }).then((response) => {
      setRequests(response);
    });
  }, []);

  return <Requests requests={requests} />;
};

export default withHeading(Home, { heading: 'Requests', withFloatingAction: true });
