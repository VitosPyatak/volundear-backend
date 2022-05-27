import { Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { IsObjectId } from 'decorators/is-objectid/is-objectid.decorator';

export class PaginationParams {
  @IsNotEmpty()
  @Transform(({ value }) => +value)
  limit: number;

  @IsNotEmpty()
  @Transform(({ obj, value }) => +value * +obj.limit)
  page: number;
}

export class RecordsSearchParams {
  @IsNotEmpty() search: string;
}

export class RecordByIdParams {
  @IsObjectId() id: string;
}
