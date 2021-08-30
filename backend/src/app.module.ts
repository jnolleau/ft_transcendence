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

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: 'postgres',
//       port: 5432,
//       username: 'root',
//       password: 'root',
//       database: 'ft_transcendence_db',
//       entities: [],
//       synchronize: true,
//     }),
// })

export class AppModule {}
