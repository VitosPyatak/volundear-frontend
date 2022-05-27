import { SingleComment } from 'components/single-comment';
import { useComments } from 'context/comments';
import { useCurrentUser } from 'context/current-user';
import { FC, useEffect, useState } from 'react';
import { CardTitle } from 'uikit/card-title';
import { CardWrapper } from 'uikit/card-wrapper';
import { SimpleInput } from 'uikit/inputs/simple';
import { createCommentWithoutId } from 'utils/comments';
import classes from './styles.module.scss';
import { CommentsCardProps } from './types';

export const CommentsCard: FC<CommentsCardProps> = ({ request }) => {
  const { comments, getComments, sendComment, joinCommentsRoom } = useComments();
  const { currentUser } = useCurrentUser();

  const submitComment = (text: string) => {
    if (currentUser) sendComment(createCommentWithoutId(text, currentUser._id, request._id));
  };

  useEffect(() => {
    joinCommentsRoom(request._id);
    getComments(request._id);
  }, []);

  return (
    <CardWrapper largePadding>
      <CardTitle title='Comments' />
      <div className={classes.comments}>
        {comments.map((comment) => (
          <SingleComment comment={comment} />
        ))}
      </div>
      <div className={classes.input}>
        <SimpleInput placeholder='Write a comment...' submitInput={submitComment} />
      </div>
    </CardWrapper>
  );
};
