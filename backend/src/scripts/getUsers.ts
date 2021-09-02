import { createConnection, createQueryBuilder, ConnectionOptions } from 'typeorm';
import { Users } from '../users/entity/users.entity';
import { configService } from '../config/config.service';

function run() {
  createConnection(configService.getTypeOrmConfig() as ConnectionOptions)
  .then(async connection => {
    const repo = connection.getRepository(Users);
    const allUsers = await repo.find();
    console.log(allUsers);
  })
}

run();
// .then(_ => console.log('...wait for script to exit'))
// .catch(error => console.error('seed error', error));