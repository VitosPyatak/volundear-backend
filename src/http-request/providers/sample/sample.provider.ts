import { Injectable } from '@nestjs/common';
import { HttpRequestProvider } from '../../http-request.provider';

@Injectable()
export class SampleApiProvider extends HttpRequestProvider {
  constructor() {
    super('https://jsonplaceholder.typicode.com');
  }

  public getPost = (postId: number) => {
    return this.get(`/posts/${postId}`);
  };
}
