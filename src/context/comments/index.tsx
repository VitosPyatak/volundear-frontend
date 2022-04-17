import { mockRequestId } from 'components/chat/configs';
import { useSockets } from 'context/socket';
import { CommentModel } from 'models/comment';
import { createContext, FC, useContext, useEffect, useState } from 'react';
import { CommentsContextType } from './types';

export const CommentsContext = createContext<CommentsContextType>(null as any);

export const useComments = () => useContext(CommentsContext);

export const CommentsProvider: FC = ({ children }) => {
  const [comments, setComments] = useState<CommentModel[]>([]);

  const { registerCommentsHandler, joinRoom } = useSockets();

  const updateComments = (comment: CommentModel) => {
    setComments((state) => [...state, comment]);
  };

  useEffect(() => {
    registerCommentsHandler(updateComments);
    joinRoom(mockRequestId);
  }, []);

  return <CommentsContext.Provider value={{ comments, updateComments }}>{children}</CommentsContext.Provider>;
};
