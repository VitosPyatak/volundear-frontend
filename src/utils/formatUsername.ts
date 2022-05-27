import { UserModel } from 'models/user';

export const formatUsername = (user: UserModel) => {
  return `${user.firstname} ${user.lastname}`;
};
