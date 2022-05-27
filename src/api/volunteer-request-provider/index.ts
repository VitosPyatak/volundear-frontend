import { HttpProvider } from 'api/http-provider';
import { appVariables } from 'configs';
import { RequestModel } from 'models/request';
import { GetRequestsResponseDTO, GetVolunteerRequestsQuery } from './types';

class VolunteerRequestHttpProvider extends HttpProvider {
  constructor() {
    super(appVariables.apiUrl);
  }

  public getRequests = ({ limit, page }: GetVolunteerRequestsQuery) => {
    return this.get<GetRequestsResponseDTO>('/volunteer-request', { query: new URLSearchParams({ limit, page }) });
  };

  public getById = (id: string) => {
    return this.get<RequestModel>(`/volunteer-request/${id}`);
  };

  public addAssignee = (requestId: string, userId: string) => {
    return this.put(`/volunteer-request/${requestId}/assignee/add`, { body: { id: userId } });
  };
}

export const volunteerRequestHttpProvider = new VolunteerRequestHttpProvider();
