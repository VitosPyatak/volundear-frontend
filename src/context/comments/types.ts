import { CommentModel } from 'models/comment';

export type CommentsContextType = {
  comments: CommentModel[];
  updateComments: (comment: CommentModel) => void;
  getComments: (requestId: string) => void;
  sendComment: (comment: Partial<CommentModel<string>>) => void;
  joinCommentsRoom: (requestId: string) => void;
};
