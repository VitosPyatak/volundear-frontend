import { RequestModel } from 'models/request';

export type ExtendedRequestCardProps = {
  request: RequestModel;
  addRequestAssignee: VoidFunction;
};
