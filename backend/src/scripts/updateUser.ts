import { createConnection, ConnectionOptions } from 'typeorm';
import { Users } from '../users/entity/users.entity';
import { configService } from '../config/config.service';

function run() {
  createConnection(configService.getTypeOrmConfig() as ConnectionOptions)
  .then(async connection => {
    const userRepository = connection.getRepository(Users);
    const userToUpdate = await userRepository.findOne(4);
    userToUpdate.name = "Henry";
    await userRepository.save(userToUpdate);
    console.log(userToUpdate);
  })
}

run();
// .catch(error => console.error('update error', error));