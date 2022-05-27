import { Children } from 'types/props';

export type WithHeadingProps = {
  withFloatingAction?: boolean;
  withBackButton?: boolean;
  heading: string;
};

export type HeadingProps = WithHeadingProps & {
  children: Children;
};
