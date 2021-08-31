import { createConnection, createQueryBuilder, ConnectionOptions } from 'typeorm';
import { JobsEntity } from '../entity/jobs.entity';
import { configService } from '../config/config.service';

async function run() {
  await createConnection(configService.getTypeOrmConfig() as ConnectionOptions)
  .then(connection => {
    createQueryBuilder()
    .insert()
    .into(JobsEntity)
    .values([
      { title: "Job4", details: "details for job 4" }, 
      ])
    .execute();    
  })
}

run()
.then(_ => console.log('...wait for script to exit'))
.catch(error => console.error('seed error', error));