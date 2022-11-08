import { Controller, Get, Req, Param, Res, HttpStatus } from '@nestjs/common';
import { ModelService } from './model/model.service';
import { Request } from 'express';

@Controller('data')
export class DataController {
  constructor(private readonly modelService: ModelService) {}

  @Get()
  getData(@Req() request: Request, @Res() response) {
    const data = 
      this.modelService.getData(
        request.ip, 
        request.query['id']
      );
    
    // return JSON.stringify(data);
    return response.status(HttpStatus.OK).json({ data });
  }

  @Get(':type/:id')
  getItem(@Param() params, @Req() request: Request, @Res() response) {
    const data = {
      ...this.modelService.getData(
        request.ip, 
        request.query['id']
      ),
      route_id: params.id,
      route_type: params.type,
    };

    // return JSON.stringify(data);
    return response.status(HttpStatus.OK).json({ data });
  }
}
