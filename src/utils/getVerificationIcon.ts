import { UserModel } from 'models/user';
import { IconEnum } from 'types/icons';

export const getVerificationIcon = (user: UserModel) => (user.isVerified ? IconEnum.verified : IconEnum.unverified);
