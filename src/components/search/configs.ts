import { UserModel } from 'models/user';

export const usersCountTemplate = (users: UserModel[]) => {
  return `Users: ${users?.length}`;
};
