import { commentsHttpProvider } from 'api/comments-provider';
import { useSockets } from 'context/socket';
import { CommentModel } from 'models/comment';
import { createContext, FC, useContext, useEffect, useState } from 'react';
import { CommentsContextType } from './types';

export const CommentsContext = createContext<CommentsContextType>(null as any);

export const useComments = () => useContext(CommentsContext);

export const CommentsProvider: FC = ({ children }) => {
  const [comments, setComments] = useState<CommentModel[]>([]);

  const { registerCommentsHandler, sendComment, joinRoom } = useSockets();

  const updateComments = (comment: CommentModel) => {
    setComments((state) => [...state, comment]);
  };

  const updateMultipleComments = (comments: CommentModel[]) => {
    setComments((state) => [...state, ...comments]);
  };

  const getComments = (requestId: string) => {
    commentsHttpProvider.getComments(requestId, '100', '0').then(updateMultipleComments);
  };

  const joinCommentsRoom = (requestId: string) => {
    joinRoom(requestId);
  };

  useEffect(() => {
    registerCommentsHandler(updateComments);
  }, []);

  return (
    <CommentsContext.Provider value={{ comments, updateComments, getComments, sendComment, joinCommentsRoom }}>
      {children}
    </CommentsContext.Provider>
  );
};
