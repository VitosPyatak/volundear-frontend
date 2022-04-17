import classes from './styles.module.scss';
import { withHeading } from 'hoc/with-heading';
import { UserCard } from 'components/user-card';
import { mockUser } from 'components/home/mock';
import { SubheaderSection } from 'uikit/subheader-section';
import { mockedAccountRequests, selfUserId } from './mock';
import { Requests } from 'components/requests';
import { useEffect, useState } from 'react';
import { userHttpProvider } from 'api/user-provider';
import { UserModel } from 'models/user';
import { RequestModel } from 'models/request';
import { userRequestHttpProvider } from 'api/search-provider';

const Account = () => {
  const [account, setAccount] = useState<UserModel>();
  const [requests, setRequests] = useState<RequestModel[]>();

  useEffect(() => {
    userHttpProvider.getById(selfUserId).then((response) => {
      setAccount(response);
    });

    userRequestHttpProvider.getUserRequests(selfUserId).then((response) => {
      setRequests(response);
    });
  }, []);

  return (
    <div className={classes.container}>
      {account && (
        <>
          <div className={classes.user}>
            <UserCard user={account} />
          </div>

          <SubheaderSection title='My request'>
            <>{requests && <Requests requests={requests} />}</>
          </SubheaderSection>
        </>
      )}
    </div>
  );
};

export default withHeading(Account, { heading: 'My account', withFloatingAction: true });
