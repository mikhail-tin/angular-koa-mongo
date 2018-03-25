# Tour of heroes/ Koa Anglar Mongo

## this project not done yet

## Stack

* Front end(TypeScript): Angular 5 + Redux
* Back end(TypeScript): Koa2 + MongoDB(Mongoose)

## Prerequisites

* NodeJs
* MongoDB (Make sure that port is 27017)

### Run mongoDB

#### Windows

Create the following folder: C:\data\db

```cmd
> cd C:\Program Files\MongoDB\Server\3.6\bin && mongod.exe
```

#### Fedora Linux

```bashr
 sudo service mongod start
 mongo
```

### Commands

* ```npm run start-client-dev``` - Webpack with hot reloading on localhost:4200
* ```npm run start-server-dev``` - Run server on localhost:3000 (or F5 in VS Code with Debug). Don't forget run ```build-client-dev``` first.
* ```npm run build-client-dev``` - Build client in target directory
* ```npm run build-server-dev``` - Build server in target directory

## License

MIT
