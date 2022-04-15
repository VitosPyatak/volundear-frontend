import { mockedAccountRequests } from 'components/account/mock';
import { RequestCard } from 'components/request-card';
import { Requests } from 'components/requests';
import { withHeading } from 'hoc/with-heading';
import { SubheaderSection } from 'uikit/subheader-section';
import classes from './styles.module.scss';

const Search = () => {
  return (
    <div className={classes.container}>
      <SubheaderSection title='Requests: 5'>
        <Requests requests={mockedAccountRequests} />
      </SubheaderSection>
    </div>
  );
};

export default withHeading(Search, { heading: 'Search results' });
