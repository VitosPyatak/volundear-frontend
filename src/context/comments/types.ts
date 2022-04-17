import { CommentModel } from 'models/comment';
import { Children } from 'types/props';

export type CommentsContextType = {
  comments: CommentModel[];
  updateComments: (comment: CommentModel) => void;
};
