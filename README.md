# ft_transcendence
Website for the mighty pong contest. With an admin view, chat with moderators, real-time multiplayer online games.
Built in NestJs (back) and React (Front).
Completely dockerized

## Application structure:
- [Vue.js 3](https://v3.vuejs.org/guide/introduction.html) as frontend accessible on http://localhost:8080
- [Nest JS](https://docs.nestjs.com/) as backend accessible on http://localhost:3000
- a database [PostgreSQL](https://www.postgresql.org/docs/13/index.html)
- [Adminer](https://www.adminer.org/en/) as database management tool accessible on http://localhost:8000

## To run the application:
NB: the installation process may take some times
```sh
$ cd ft_transcendence
$ docker-compose up --build
```
The first time you run the application, the database is empty, you may want to seed the db with some users:
```sh
$ ./seed_db.sh
```
If errors occures after a git pull:
```sh
$ ./reset.sh
```
### The front is made of four routes:
- `/`: simply welcome
- `/users`: list all the users in database
- `/adduser`: allows to add user in database
- `/chat`: after entering a random username, a chat module is available. To test it, simply open a second window, enter a username and lets test

In a nutshell, the front communicates with the backend API via an sdk, generated thanks to the [OpenApi module (@nestjs/swagger)](https://docs.nestjs.com/openapi/introduction) nested by NestJs and the [swagger editor](https://editor.swagger.io/).  
The chat is working with the [Websocket module (@nestjs/websockets)](https://docs.nestjs.com/websockets/gateways) in backside and the [socket.io-client](https://socket.io/docs/v4/) in frontside.

