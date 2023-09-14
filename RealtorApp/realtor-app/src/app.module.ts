import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RealtorModule } from './realtor/realtor.module';
import { Realtor } from './realtor/entities/realtor.entity';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: parseInt(process.env.PORT),
      password: process.env.DATABASE_PASSWORD,
      username: process.env.DATABASE_USERNAME,
      entities: [Realtor],
      database: process.env.DATABASE_NAME,
      synchronize: true,
      logging: true,
    }),
    RealtorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
