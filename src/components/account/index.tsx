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
import { useCurrentUser } from 'context/current-user';

const Account = () => {
  const [account, setAccount] = useState<UserModel>();
  const [requests, setRequests] = useState<RequestModel[]>();

  const { accountId } = useParams();
  const { currentUser } = useCurrentUser();

  useEffect(() => {
    if (currentUser) {
      if (!accountId || currentUser._id === accountId) {
        setAccount(currentUser);
        userRequestHttpProvider.getUserRequests(currentUser._id).then(setRequests);
      } else if (accountId) {
        userHttpProvider.getById(accountId).then(setAccount);
        userRequestHttpProvider.getUserRequests(accountId).then(setRequests);
      }
    }
  }, [currentUser?._id]);

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
