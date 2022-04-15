import { withHeading } from 'hoc/with-heading';

const ExtendedRequest = () => {
  return <div>Ext</div>;
};

export default withHeading(ExtendedRequest, { heading: 'Request details', withFloatingAction: true, withBackButton: true });
