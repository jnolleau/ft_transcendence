import { createConnection, createQueryBuilder, ConnectionOptions } from 'typeorm';
import { Users } from '../users/entity/users.entity';
import { configService } from '../config/config.service';

async function run() {
  await createConnection(configService.getTypeOrmConfig() as ConnectionOptions)
  .then(connection => {
    createQueryBuilder()
    .insert()
    .into(Users)
    .values([
      { firstname: "Roger", lastname: "Federer", password: "password", salt: "salt" },
      { firstname: "Rafa", lastname: "Nadal", password: "password", salt: "salt" },
      { firstname: "Andy", lastname: "Murray", password: "password", salt: "salt" },
      { firstname: "Novak", lastname: "Djokovic", password: "password", salt: "salt" }
    ])
    .execute();
  })
}

run()
.then(_ => console.log('...wait for script to exit'))
.catch(error => console.error('seed error', error));