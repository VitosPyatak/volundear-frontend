import { HttpProvider } from 'api/http-provider';
import { appVariables } from 'configs';
import { CommentModel } from 'models/comment';

class CommentsHttpProvider extends HttpProvider {
  constructor() {
    super(appVariables.apiUrl);
  }

  public getComments = (request: string, limit: string, page: string) => {
    return this.get<CommentModel[]>(`/request-comment`, { query: new URLSearchParams({ request, page, limit }) });
  };
}

export const commentsHttpProvider = new CommentsHttpProvider();
