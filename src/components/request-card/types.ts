import { Size } from 'configs/size.types';
import { RequestModel } from 'models/request';

export type RequestCardProps = {
  size?: Size;
  request: RequestModel;
};
