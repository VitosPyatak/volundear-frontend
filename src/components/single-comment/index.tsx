import { FC } from 'react';
import { SingleCommentProps } from './types';
import classes from './styles.module.scss';
import { CardImage } from 'uikit/card-image';
import { Size } from 'configs/size.types';
import { CardText } from 'uikit/card-text';
import { formatUsername } from 'utils/formatUsername';
import { SuperimposedSubtitle } from 'uikit/superimposed-subtitle';
import { CardDescription } from 'uikit/card-description';
import { formatRequestDate } from 'utils/formatDate';

export const SingleComment: FC<SingleCommentProps> = ({ comment }) => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <CardImage url={comment.sender.profilePicture} size={Size.small} />
      </div>
      <div className={classes.contentContainer}>
        <div className={classes.subheaderContainer}>
          <CardText text={formatUsername(comment.sender)} />
          <CardDescription title={formatRequestDate(comment.createdAt)} />
        </div>
        <SuperimposedSubtitle title={comment.text} large />
      </div>
    </div>
  );
};
