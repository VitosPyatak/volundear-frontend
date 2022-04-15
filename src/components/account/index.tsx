import { withHeading } from 'hoc/with-heading';

const Account = () => {
  return <div>Account</div>;
};

export default withHeading(Account, { heading: 'My account' });
