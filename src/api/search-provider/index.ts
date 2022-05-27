import { HttpProvider } from 'api/http-provider';
import { appVariables } from 'configs';
import { RequestModel } from 'models/request';
import { UserRequestSearchDTO } from './types';

class UserRequestHttpProvider extends HttpProvider {
  constructor() {
    super(appVariables.apiUrl);
  }

  public search = (search: string) => {
    return this.get<UserRequestSearchDTO>('/user-request', { query: new URLSearchParams({ search }) });
  };

  public getUserRequests = (userId: string) => {
    return this.get<RequestModel[]>(`/user-request/${userId}`);
  };
}

export const userRequestHttpProvider = new UserRequestHttpProvider();
