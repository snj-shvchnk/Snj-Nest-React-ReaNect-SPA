import { Injectable } from '@nestjs/common';

@Injectable()
export class ModelService {
  getData(client_ip, data_id): object {
    
    // Debug data...
    const moq = { 
      'id': 7, 
      'title': 'Profile', 
      'ip': client_ip, 
      'data_id': data_id,
      'value': {
        'Name': 'Snj', 
        'Family': 'Shevchenko',
        'Age': 29,
        'Sex': 'Male',
      },
    };
    
    return moq;
  }
}