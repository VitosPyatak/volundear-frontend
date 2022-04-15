import { mockedAccountRequests } from 'components/account/mock';
import { Requests } from 'components/requests';
import { withHeading } from 'hoc/with-heading';

const Home = () => {
  return <Requests requests={mockedAccountRequests} />;
};

export default withHeading(Home, { heading: 'Requests', withFloatingAction: true });
