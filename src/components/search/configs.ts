import { RequestModel } from 'models/request';
import { UserModel } from 'models/user';

export const usersCountTemplate = (users: UserModel[]) => {
  return `Users: ${users?.length}`;
};

export const requestsCountTemplate = (requests: RequestModel[]) => {
  return `Requests: ${requests?.length}`;
};
