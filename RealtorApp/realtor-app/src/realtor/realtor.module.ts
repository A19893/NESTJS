import { Module } from '@nestjs/common';
import { RealtorService } from './realtor.service';
import { RealtorController } from './realtor.controller';

@Module({
  providers: [RealtorService],
  controllers: [RealtorController]
})
export class RealtorModule {}
