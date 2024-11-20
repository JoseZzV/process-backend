import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'jdzulva5V',
  database: 'process',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, 
};

export default typeOrmConfig;