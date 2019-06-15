import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [TypeOrmModule.forRoot(), CatsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
