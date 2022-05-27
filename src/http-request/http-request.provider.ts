import { HttpService } from '@nestjs/axios';
import { Inject } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { HttpRequestHeadersBuilder } from './http-request-headers.builder';
import { HttpRequestOptions } from './http-request.types';

export abstract class HttpRequestProvider {
  @Inject() private readonly http: HttpService;

  protected constructor(private readonly baseUrl: string) {}

  protected get = <T>(path: string, options?: HttpRequestOptions) => {
    const requestUrl = this.getRequestUrl(path);
    return this.handleRequest<T>(this.http.get(requestUrl, { headers: options?.headers || this.defaultHeaders }));
  };

  protected post = <T>(path: string, options?: HttpRequestOptions) => {
    const requestUrl = this.getRequestUrl(path);
    return this.handleRequest<T>(this.http.post(requestUrl, options?.body, { headers: options?.headers || this.defaultHeaders }));
  };

  protected put = <T>(path: string, options?: HttpRequestOptions) => {
    const requestUrl = this.getRequestUrl(path);
    return this.handleRequest<T>(this.http.put(requestUrl, options?.body, { headers: options?.headers || this.defaultHeaders }));
  };

  protected delete = <T>(path: string, options?: HttpRequestOptions) => {
    const requestUrl = this.getRequestUrl(path);
    return this.handleRequest<T>(this.http.delete(requestUrl, { headers: options?.headers || this.defaultHeaders }));
  };

  private handleRequest = <T>(pendingRequest: Observable<AxiosResponse<T>>) => {
    return new Promise<T>((resolve) => {
      pendingRequest.subscribe((response) => resolve(response.data));
    });
  };

  private getRequestUrl = (path: string) => `${this.baseUrl}${path}`;

  private get defaultHeaders() {
    return HttpRequestHeadersBuilder.initial().build();
  }
}
