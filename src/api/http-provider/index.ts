import { HttpRequestOptions } from './types';

export abstract class HttpProvider {
  constructor(private readonly baseUrl: string) {}

  protected get = <T>(path: string, options?: HttpRequestOptions): Promise<T> => {
    const url = this.getRequestUrl(path, options);
    return fetch(url).then(this.processResponse);
  };

  private getRequestUrl = (path: string, options?: HttpRequestOptions) => {
    const url = new URL(`${this.baseUrl}${path}`);
    if (options?.query) url.search = options.query.toString();
    return url.toString();
  };

  private processResponse = async (response: Response) => {
    if (response.status < 300 && response.status >= 200) return response.json();
  };
}
