import { HttpProvider } from 'api/http-provider';
import { appVariables } from 'configs';
import { UserModel } from 'models/user';

class UserHttpProvider extends HttpProvider {
  constructor() {
    super(appVariables.apiUrl);
  }

  public getById = (id: string) => {
    return this.get<UserModel>(`/user/${id}`);
  };
}

export const userHttpProvider = new UserHttpProvider();
