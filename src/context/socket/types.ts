import { CommentCallback, CommentModel } from 'models/comment';
import { Socket } from 'socket.io-client';
import { Children } from 'types/props';

export type ScoketContextType = {
  sendComment: (comment: Partial<CommentModel<string>>) => void;
  registerCommentsHandler: (callback: CommentCallback) => void;
  joinRoom: (request: string) => void;
  socket: Socket;
};
