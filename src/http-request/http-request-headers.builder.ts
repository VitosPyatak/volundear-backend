import { defaultHttpRequestHeaders } from './http-request.configs';

export class HttpRequestHeadersBuilder {
  private readonly httpHeaders: Record<string, string> = {};

  static initial = () => {
    return new HttpRequestHeadersBuilder().setInitialHeaders();
  };

  public authorization = (authorizationToken: string) => {
    this.httpHeaders.Authorization = authorizationToken;
    return this;
  };

  public build = () => this.httpHeaders;

  private setInitialHeaders = () => {
    Object.entries(defaultHttpRequestHeaders).forEach(([header, value]) => {
      this.httpHeaders[header] = value;
    });
    return this;
  };
}
