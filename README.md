
## Stack :
NodeJS, ExpressJS, NestJS, GraphQL, TypeORM, PassportJS


## Run on dev :
> yarn start:dev

## Add Package :
> yarn add <package_name>

## Generate new resource (module, controller, service)
* run :
    > nest g resource <module_name>

* module name should use lowercase and prulars (eg: users)
* Select REST or GraphQL
* Generate CRUD entry point? Y
* please configure all needed decorator on Controller, DTO, Entity can see "users"
* 

## Open API Doc
* open on <api_url>/docs
* when make module with Please define schema and all Api decorator neede

## For TypeORM CLI
* npm i -g typeorm
* npm install -g ts-node
* npm run migration:generate UserMigration
* npm run migration:run
