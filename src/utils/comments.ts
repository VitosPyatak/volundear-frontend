import { CommentModel } from 'models/comment';

export const createCommentWithoutId = (text: string, sender: string, request: string): Partial<CommentModel<string>> => ({
  text,
  sender,
  request,
});
