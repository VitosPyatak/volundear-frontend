import { HttpProvider } from 'api/http-provider';
import { appVariables } from 'configs';
import { GetRequestsResponseDTO, GetVolunteerRequestsQuery } from './types';

class VolunteerRequestHttpProvider extends HttpProvider {
  constructor() {
    super(appVariables.apiUrl);
  }

  public getRequests = ({ limit, page }: GetVolunteerRequestsQuery) => {
    return this.get<GetRequestsResponseDTO>('/volunteer-request', { query: new URLSearchParams({ limit, page }) });
  };
}

export const volunteerRequestHttpProvider = new VolunteerRequestHttpProvider();
