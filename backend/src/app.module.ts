import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
// import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()), 
    JobsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
