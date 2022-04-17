import { RequestModel } from "models/request";

export type GetVolunteerRequestsQuery = {
  limit: string;
  page: string;
};

export type GetRequestsResponseDTO = RequestModel[]


