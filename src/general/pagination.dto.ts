import { Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class PaginationParams {
  @IsNotEmpty()
  @Transform(({ value }) => +value)
  limit: number;

  @IsNotEmpty()
  @Transform(({ obj, value }) => +value * +obj.limit)
  page: number;
}
