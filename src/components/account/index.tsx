import classes from './styles.module.scss';
import { withHeading } from 'hoc/with-heading';
import { UserCard } from 'components/user-card';
import { mockUser } from 'components/home/mock';

const Account = () => {
  return (
    <div className={classes.container}>
      <div className={classes.user}>
        <UserCard user={mockUser} />
      </div>
    </div>
  );
};

export default withHeading(Account, { heading: 'My account', withFloatingAction: true });
