import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RealtorModule } from './realtor/realtor.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '1234',
      username: 'postgres',
      entities: [],
      database: 'MyDB',
      synchronize: true,
      logging: true,
    }),
    RealtorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
