import { RequestModel } from 'models/request';
import { UserModel } from 'models/user';
import { nanoid } from 'nanoid';
import { VolunteerRequestCategory } from 'types/volunteer-request-category';
import { VolunteerRequestStatus } from 'types/volunteer-request-status';

export const mockUser: UserModel = {
  firstname: 'Victor',
  lastname: 'Pyatak',
  description:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  phoneNumber: '380961720000',
  profilePicture: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/3c256e58872685.5a0c7b8939f42.png',
  isVerified: true,
};

export const mockRequest: RequestModel = {
  _id: nanoid(),
  title: 'Title',
  description: 'Description text...',
  status: VolunteerRequestStatus.active,
  category: VolunteerRequestCategory.military,
  owner: mockUser,
  assignees: [],
};

export const mockedRequests: RequestModel[] = new Array(8).fill(mockRequest);
