export type CommentModel = {
  _id: string;
  text: string;
  sender: string;
  request: string;
};

export type CommentCallback = (comment: CommentModel) => void;
