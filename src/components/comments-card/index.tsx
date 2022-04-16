import { SingleComment } from 'components/single-comment';
import { FC, useState } from 'react';
import { CardTitle } from 'uikit/card-title';
import { CardWrapper } from 'uikit/card-wrapper';
import { SimpleInput } from 'uikit/inputs/simple';
import classes from './styles.module.scss';
import { CommentsCardProps } from './types';

export const CommentsCard: FC<CommentsCardProps> = ({ comments }) => {
  const [input, setInput] = useState<string>('');

  const submitComment = () => {};

  return (
    <CardWrapper largePadding>
      <CardTitle title='Comments' />
      <div className={classes.comments}>
        {comments.map((comment) => (
          <SingleComment comment={comment} />
        ))}
      </div>
      <div className={classes.input}>
        <SimpleInput onChange={setInput} placeholder='Write a comment...' submitInput={submitComment} />
      </div>
    </CardWrapper>
  );
};
