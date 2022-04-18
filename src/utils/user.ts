import { UserModel } from 'models/user';

export const doesIncludeUser = (users: UserModel[], user: UserModel) => {
  return users.find(({ _id }) => _id === user._id);
};
