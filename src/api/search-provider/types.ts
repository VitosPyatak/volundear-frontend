import { RequestModel } from 'models/request';
import { UserModel } from 'models/user';

export type UserRequestSearchDTO = {
  users: UserModel[];
  requests: RequestModel[];
};
