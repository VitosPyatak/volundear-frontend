import classes from './styles.module.scss';
import { Size } from 'configs/size.types';
import { FC } from 'react';
import { CardImage } from 'uikit/card-image';
import { CardTitle } from 'uikit/card-title';
import { CardWrapper } from 'uikit/card-wrapper';
import { formatUsername } from 'utils/formatUsername';
import { UserCardProps } from './types';
import { EditIcon } from 'uikit/icons/edit.icons';
import { VerifiedIcon } from 'uikit/icons/verified.icon';
import { SuperimposedSubtitle } from 'uikit/superimposed-subtitle';
import { IconEnum } from 'types/icons';

export const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <CardWrapper largePadding>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <CardImage url={user.profilePicture} />
          <EditIcon />
        </div>

        <CardTitle size={Size.large} title={formatUsername(user)} icon={IconEnum.verified} />

        <SuperimposedSubtitle large subtitle='Phone number' title={user.phoneNumber} />

        <SuperimposedSubtitle large subtitle='Description' title={user.description} />
      </div>
    </CardWrapper>
  );
};
