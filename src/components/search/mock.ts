import { mockUser } from 'components/home/mock';
import { UserModel } from 'models/user';

const user: UserModel = { ...mockUser, description: 'Description text...' };

export const mockUsers: UserModel[] = Array(3).fill(user);
