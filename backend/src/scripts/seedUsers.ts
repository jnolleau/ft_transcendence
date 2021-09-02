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
      { name: "Roger", surname: "Federer" }, 
      { name: "Rafa", surname: "Murray" }, 
      { name: "Andy", surname: "Nadal" }, 
      { name: "Novak", surname: "Djokovic" } 
      ])
    .execute();    
  })
}

run()
.then(_ => console.log('...wait for script to exit'))
.catch(error => console.error('seed error', error));