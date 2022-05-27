import { RequestCard } from 'components/request-card';
import { FC } from 'react';
import classes from './styles.module.scss';
import { RequestsProps } from './types';

export const Requests: FC<RequestsProps> = ({ requests }) => {
  return (
    <div className={classes.container}>
      {requests?.map((request) => (
        <div className={classes.card}>
          <RequestCard request={request} />
        </div>
      ))}
    </div>
  );
};
