import { Module } from '@nestjs/common';
import { RealtorService } from './realtor.service';
import { RealtorController } from './realtor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Realtor } from './entities/realtor.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Realtor])],
  controllers: [RealtorController],
  providers: [RealtorService],
})
export class RealtorModule {}
