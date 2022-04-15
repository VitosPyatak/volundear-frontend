import { VolunteerRequestCategory } from 'types/volunteer-request-category';
import { VolunteerRequestStatus } from 'types/volunteer-request-status';
import { UserModel } from './user';

export type RequestModel<User = UserModel, Assignee = UserModel> = {
  title: string;
  description: string;
  status: VolunteerRequestStatus;
  category: VolunteerRequestCategory;
  owner: User;
  assignees: Assignee[];
};
