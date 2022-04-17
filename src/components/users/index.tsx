import { FC } from 'react';
import { UsersProps } from './types';
import classes from './styles.module.scss';
import { UserSearchCard } from 'components/user-search-card';

export const Users: FC<UsersProps> = ({ users }) => {
  return (
    <div className={classes.container}>
      {users.map((user) => (
        <div key={user._id} className={classes.user}>
          <UserSearchCard user={user} />
        </div>
      ))}
    </div>
  );
};
