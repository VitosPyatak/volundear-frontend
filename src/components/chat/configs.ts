import { CommentModel } from 'models/comment';
import { nanoid } from 'nanoid';

export const mockRequestId = '625555309b0c6a35176c4e7a';

export const mockSenderId = '62554edf9b0c6a35176c4e79';

export const createCommentWithoutId = (text: string): Partial<CommentModel> => ({
  text,
  sender: mockSenderId,
  request: mockRequestId,
});
