import { withHeading } from 'hoc/with-heading';

const Search = () => {
  return <div>Search</div>;
};

export default withHeading(Search, { heading: 'Search results' });
