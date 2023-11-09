import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlModule } from './graphql/graphql.module';
import { UserModule } from './user/user.module';
import { MongooseModuleConfig } from './mongoose/mongoose.module';

@Module({
  imports: [GraphqlModule, UserModule, MongooseModuleConfig],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
