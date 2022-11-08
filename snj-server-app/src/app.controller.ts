import { AppService } from './app.service';
import { Controller, Get, Req, Param, Res, HttpStatus } from '@nestjs/common';
import { ModelService } from './model/model.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    private readonly modelService: ModelService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('list')
  getList(@Req() request: Request, @Res() response): string {
    
    const data = this.modelService.getData(
      request.ip, 
      request.query['id']
    );
    const list = this.appService.getList();
    
    console.log(list, data);
    // return this.appService.getList();
    return response.status(HttpStatus.OK).json({ list, data });
  }
}
