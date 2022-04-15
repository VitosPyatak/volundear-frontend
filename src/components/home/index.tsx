import { RequestCard } from 'components/request-card';
import { withHeading } from 'hoc/with-heading';
import { mockedRequests } from './mock';
import classes from './styles.module.scss';

const Home = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        {mockedRequests.map((request) => (
          <div className={classes.card}>
            <RequestCard request={request} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default withHeading(Home, { heading: 'Requests', withFloatingAction: true });
