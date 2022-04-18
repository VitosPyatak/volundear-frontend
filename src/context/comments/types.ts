import { CommentModel } from 'models/comment';

export type CommentsContextType = {
  comments: CommentModel[];
  updateComments: (comment: CommentModel) => void;
};
