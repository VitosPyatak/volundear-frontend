import { UserModel } from './user';

export type CommentModel<U = UserModel> = {
  _id: string;
  text: string;
  sender: U;
  request: string;
  createdAt?: string;
};

export type CommentCallback = (comment: CommentModel) => void;
