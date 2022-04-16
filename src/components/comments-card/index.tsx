import { SingleComment } from 'components/single-comment';
import { FC } from 'react';
import { CardTitle } from 'uikit/card-title';
import { CardWrapper } from 'uikit/card-wrapper';
import classes from './styles.module.scss';
import { CommentsCardProps } from './types';

export const CommentsCard: FC<CommentsCardProps> = ({ comments }) => {
  return (
    <CardWrapper largePadding>
      <CardTitle title='Comments' />
      <div className={classes.comments}>
        {comments.map((comment) => (
          <SingleComment comment={comment} />
        ))}
      </div>
    </CardWrapper>
  );
};
