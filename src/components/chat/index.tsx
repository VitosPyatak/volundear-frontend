import classes from './styles.module.scss';
import { ChangeEventHandler, useState } from 'react';
import { useComments } from 'context/comments';
import { useSockets } from 'context/socket';
import { createCommentWithoutId } from './configs';

const Chat = () => {
  const [input, setInput] = useState<string>();

  const { comments } = useComments();
  const { sendComment } = useSockets();

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => setInput(event.target.value);

  const submitComment = () => {
    if (input) {
      setInput('');
      sendComment(createCommentWithoutId(input));
    }
  };

  return (
    <div className={classes.container}>
      <h1>Chat</h1>
      <div className={classes.commentsContainer}>
        {comments.map((comment) => (
          <p>{comment.text}</p>
        ))}
      </div>
      <input value={input} onChange={onInputChange} />
      <div onClick={submitComment}>send comment</div>
    </div>
  );
};

export default Chat;
