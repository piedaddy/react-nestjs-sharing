import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'frontend', 'dist'),
    }),
    //connecting to DB
    TypeOrmModule.forRoot({
      type: 'postgres',
      entities: [User],
      port: 5432,
      username: 'postgres',
      password: 'gaby',
      host: 'localhost',
      database: 'react-nestjs',
      //synchronize should only be used in development mode!!
      //it automatically creates DB schema, could result in data being lost
      //if it's false, we'd have to run migrations to update the DB
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
