import { Module } from '@nestjs/common';
import { StringUtil } from './String.util';
import { ResponseCommon } from './common/Response.common';

@Module({
  providers: [StringUtil, ResponseCommon],
  exports: [StringUtil],
})
export class UtilsModule {}
