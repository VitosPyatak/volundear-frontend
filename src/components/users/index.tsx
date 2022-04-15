import { FC } from 'react';
import { UsersProps } from './types';
import classes from './styles.module.scss';
import { UserCard } from 'components/user-card';
import { UserSearchCard } from 'components/user-search-card';

export const Users: FC<UsersProps> = ({ users }) => {
  return (
    <div className={classes.container}>
      {users.map((user) => (
        <div className={classes.user}>
          <UserSearchCard user={user} />
        </div>
      ))}
    </div>
  );
};
