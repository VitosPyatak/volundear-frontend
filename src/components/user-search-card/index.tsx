import { UserCardProps } from 'components/user-card/types';
import { Size } from 'configs/size.types';
import { FC } from 'react';
import { IconEnum } from 'types/icons';
import { SimpleButton } from 'uikit/buttons/simple';
import { CardDescription } from 'uikit/card-description';
import { CardImage } from 'uikit/card-image';
import { CardTitle } from 'uikit/card-title';
import { CardWrapper } from 'uikit/card-wrapper';
import { formatUsername } from 'utils/formatUsername';
import classes from './styles.module.scss';

export const UserSearchCard: FC<UserCardProps> = ({ user }) => {
  return (
    <CardWrapper horizontal>
      <CardImage size={Size.medium} url={user.profilePicture} />
      <div className={classes.infoContainer}>
        <CardTitle title={formatUsername(user)} icon={IconEnum.verified} />
        <CardDescription title={user.description} />
      </div>
      <div className={classes.button}>
        <SimpleButton onClick={() => {}} title='See profile' />
      </div>
    </CardWrapper>
  );
};
