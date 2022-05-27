import { Body, Controller, Get, Param, ParseArrayPipe, ParseBoolPipe, ParseIntPipe, Post, Query } from '@nestjs/common';
import { SampleDto } from './app.dto';
import { AppService } from './app.service';
import { SampleApiProvider } from './http-request/providers/sample/sample.provider';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly sampleApi: SampleApiProvider) {}

  @Get()
  getByIds(@Query('ids', new ParseArrayPipe({ items: Number, separator: ',' })) ids: number[]) {
    return ids;
  }

  @Post()
  samplePost(@Body() sampleBody: SampleDto) {
    return sampleBody;
  }

  @Post('/bulk')
  samplePostBulk(@Body(new ParseArrayPipe({ items: SampleDto })) sampleBody: SampleDto[]) {
    return sampleBody;
  }

  @Get('post/:id')
  findPost(@Param('id', ParseIntPipe) postId: number) {
    return this.sampleApi.getPost(postId);
  }
}
