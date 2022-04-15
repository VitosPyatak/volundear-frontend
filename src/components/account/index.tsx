import classes from './styles.module.scss';
import { withHeading } from 'hoc/with-heading';
import { UserCard } from 'components/user-card';
import { mockUser } from 'components/home/mock';
import { SubheaderSection } from 'uikit/subheader-section';
import { mockedAccountRequests } from './mock';
import { RequestCard } from 'components/request-card';

const Account = () => {
  return (
    <div className={classes.container}>
      <div className={classes.user}>
        <UserCard user={mockUser} />
      </div>

      <SubheaderSection title='My request'>
        <div className={classes.requestContainer}>
          {mockedAccountRequests.map((request) => {
            return (
              <div className={classes.request}>
                <RequestCard request={request} />
              </div>
            );
          })}
        </div>
      </SubheaderSection>
    </div>
  );
};

export default withHeading(Account, { heading: 'My account', withFloatingAction: true });
