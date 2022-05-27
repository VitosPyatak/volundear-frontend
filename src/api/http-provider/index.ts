import { defaultHeaders } from './configs';
import { HttpRequestOptions } from './types';

export abstract class HttpProvider {
  constructor(private readonly baseUrl: string) {}

  protected get = <T>(path: string, options?: HttpRequestOptions): Promise<T> => {
    const url = this.getRequestUrl(path, options);
    return fetch(url, { headers: defaultHeaders }).then(this.processResponse);
  };

  protected put = <T>(path: string, options?: HttpRequestOptions): Promise<T> => {
    const url = this.getRequestUrl(path, options);
    return fetch(url, { method: 'PUT', body: this.getRequestBody(options), headers: defaultHeaders }).then(this.processResponse);
  };

  private getRequestUrl = (path: string, options?: HttpRequestOptions) => {
    const url = new URL(`${this.baseUrl}${path}`);
    if (options?.query) url.search = options.query.toString();
    return url.toString();
  };

  private getRequestBody = (options?: HttpRequestOptions) => {
    return options?.body && JSON.stringify(options.body);
  };

  private processResponse = async (response: Response) => {
    if (response.status < 300 && response.status >= 200) return response.json();
  };
}
