import { createConnection, ConnectionOptions } from 'typeorm';
import { JobsEntity } from '../jobs/entity/jobs.entity';
import { configService } from '../config/config.service';

function run() {
  createConnection(configService.getTypeOrmConfig() as ConnectionOptions)
  .then(async connection => {
    const repo = connection.getRepository(JobsEntity);
    const JobToUpdate = await repo.findOne(4);
    JobToUpdate.details = "Nouveaux details du job 4";
    await repo.save(JobToUpdate);
    console.log(JobToUpdate);
  })
}

run();
// .catch(error => console.error('update error', error));