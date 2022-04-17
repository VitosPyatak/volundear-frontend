import { Requests } from 'components/requests';
import { Users } from 'components/users';
import { useSearch } from 'context/search';
import { withHeading } from 'hoc/with-heading';
import { useEffect } from 'react';
import { SubheaderSection } from 'uikit/subheader-section';
import { requestsCountTemplate, usersCountTemplate } from './configs';
import classes from './styles.module.scss';

const Search = () => {
  const { users, requests, reset } = useSearch();

  useEffect(() => reset, []);

  return (
    <div className={classes.container}>
      <SubheaderSection title={usersCountTemplate(users)}>
        <Users users={users} />
      </SubheaderSection>
      <SubheaderSection title={requestsCountTemplate(requests)}>
        <Requests requests={requests} />
      </SubheaderSection>
    </div>
  );
};

export default withHeading(Search, { heading: 'Search results' });
