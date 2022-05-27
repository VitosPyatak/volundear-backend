import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SampleApiProvider } from './providers/sample/sample.provider';

@Module({ imports: [HttpModule], exports: [SampleApiProvider], providers: [SampleApiProvider] })
export class HttpRequestModule {}
