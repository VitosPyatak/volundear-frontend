import { RequestModel } from './request';

export type UserModel = {
  _id: string;
  firstname: string;
  lastname: string;
  description: string;
  phoneNumber: string;
  profilePicture: string;
  isVerified: boolean;
  // TODO: make separate request for requests
  requests: RequestModel[];
};
