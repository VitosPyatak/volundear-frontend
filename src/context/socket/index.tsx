import { appVariables } from 'configs';
import { CommentCallback, CommentModel } from 'models/comment';
import { createContext, FC, useContext } from 'react';
import { io } from 'socket.io-client';
import { wsEventNames } from './configs';
import { ScoketContextType } from './types';

export const SocketContext = createContext<ScoketContextType>(null as any);

export const useSockets = () => useContext(SocketContext);

export const SocketProvider: FC = ({ children }) => {
  const socket = io(`${appVariables.apiUrl}/comments`);

  const sendComment = (comment: Partial<CommentModel<string>>) => {
    socket.emit(wsEventNames.comments, comment);
  };

  const joinRoom = (request: string) => {
    socket.emit(wsEventNames.joinRoom, { request });
  };

  const registerCommentsHandler = (callback: CommentCallback) => {
    socket.on(wsEventNames.comments, callback);
  };

  return (
    <SocketContext.Provider value={{ sendComment, socket, registerCommentsHandler, joinRoom }}>{children}</SocketContext.Provider>
  );
};
