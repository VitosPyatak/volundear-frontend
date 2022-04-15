import { RequestModel } from 'models/request';
import { UserModel } from 'models/user';
import { VolunteerRequestCategory } from 'types/volunteer-request-category';
import { VolunteerRequestStatus } from 'types/volunteer-request-status';

const mockUser: UserModel = {
  firstname: 'Victor',
  lastname: 'Pyatak',
  description: 'Here is my description Here is my description Here is my description Here is my description',
  phoneNumber: '380961720000',
  profilePicture: '',
  isVerified: true,
};

const request: RequestModel = {
  title: 'Title',
  description: 'Description text...',
  status: VolunteerRequestStatus.active,
  category: VolunteerRequestCategory.military,
  owner: mockUser,
  assignees: [],
};

export const mockedRequests: RequestModel[] = new Array(8).fill(request);
