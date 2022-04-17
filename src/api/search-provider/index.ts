import { HttpProvider } from 'api/http-provider';
import { appVariables } from 'configs';
import { UserRequestSearchDTO } from './types';

class SearchHttpProvider extends HttpProvider {
  constructor() {
    super(appVariables.apiUrl);
  }

  public search = (search: string) => {
    return this.get<UserRequestSearchDTO>('/user-request', { query: new URLSearchParams({ search }) });
  };
}

export const searchHttpProvider = new SearchHttpProvider();
