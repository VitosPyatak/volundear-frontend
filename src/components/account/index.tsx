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
import { useParams } from 'react-router-dom';

const Account = () => {
  const [account, setAccount] = useState<UserModel>();
  const [requests, setRequests] = useState<RequestModel[]>();

  const { accountId } = useParams();

  useEffect(() => {
    const accountRequestId = accountId || selfUserId;
    userHttpProvider.getById(accountRequestId).then((response) => {
      setAccount(response);
    });

    userRequestHttpProvider.getUserRequests(accountRequestId).then((response) => {
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
