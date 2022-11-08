import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DataController } from './data.controller';
import { AppService } from './app.service';
import { ModelService } from './model/model.service';

@Module({
  imports: [],
  controllers: [
    AppController, 
    DataController
  ],
  providers: [
    AppService, 
    ModelService
  ],
})

export class AppModule {}