import { createConnection, createQueryBuilder, ConnectionOptions } from 'typeorm';
import { JobsEntity } from '../jobs/entity/jobs.entity';
import { configService } from '../config/config.service';

async function run() {
  await createConnection(configService.getTypeOrmConfig() as ConnectionOptions)
  .then(connection => {
    createQueryBuilder()
    .insert()
    .into(JobsEntity)
    .values([
      { title: "Job1", details: "details for Job1" }, 
      { title: "Job2", details: "details for Job2" }, 
      { title: "Job3", details: "details for Job3" }, 
      { title: "Job4", details: "details for Job4" } 
      ])
    .execute();    
  })
}

run()
.then(_ => console.log('...wait for script to exit'))
.catch(error => console.error('seed error', error));