import { RequestModel } from 'models/request';
import { UserModel } from 'models/user';

export type SearchContextType = {
  input: string;
  onInputChange: (input: string) => void;
  users: UserModel[];
  requests: RequestModel[];
  reset: VoidFunction;
};
