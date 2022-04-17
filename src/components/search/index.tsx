import { mockedAccountRequests } from 'components/account/mock';
import { Requests } from 'components/requests';
import { Users } from 'components/users';
import { useSearch } from 'context/search';
import { withHeading } from 'hoc/with-heading';
import { SubheaderSection } from 'uikit/subheader-section';
import { usersCountTemplate } from './configs';
import { mockUsers } from './mock';
import classes from './styles.module.scss';

const Search = () => {
  const { users, requests } = useSearch();

  return (
    <div className={classes.container}>
      <SubheaderSection title={usersCountTemplate(users)}>
        <Users users={users} />
      </SubheaderSection>
      <SubheaderSection title='Requests: 5'>
        <Requests requests={mockedAccountRequests} />
      </SubheaderSection>
    </div>
  );
};

export default withHeading(Search, { heading: 'Search results' });
