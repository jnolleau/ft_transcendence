import { createConnection, createQueryBuilder, ConnectionOptions } from 'typeorm';
import { JobsEntity } from '../jobs/entity/jobs.entity';
import { configService } from '../config/config.service';

function run() {
  createConnection(configService.getTypeOrmConfig() as ConnectionOptions)
  .then(async connection => {
    const repo = connection.getRepository(JobsEntity);
    const allJobs = await repo.find();
    console.log(allJobs);
  })
}

run();
// .then(_ => console.log('...wait for script to exit'))
// .catch(error => console.error('seed error', error));