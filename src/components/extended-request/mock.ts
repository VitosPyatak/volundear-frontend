import { mockRequest, mockUser } from 'components/home/mock';
import { CommentModel } from 'models/comment';
import { RequestModel } from 'models/request';
import { nanoid } from 'nanoid';

export const mockExtendedRequest: RequestModel = {
  ...mockRequest,
  assignees: [mockUser, mockUser, mockUser, mockUser],
  description: `Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. 
Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.

Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.`,
};

export const mockComment: CommentModel = {
  _id: nanoid(),
  text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  sender: mockUser,
  request: mockRequest._id,
};

export const mockComments = new Array(2).fill(mockComment);
