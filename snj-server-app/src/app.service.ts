import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World Snj!';
  }

  getList(): object {
    const moq_list = {
      items: [
        { id: 23, title: 'Pelela Banana', Rate: 2.3 },
        { id: 36, title: 'Lelena Palo', Rate: 4.3 },
        { id: 47, title: 'Nelelena Polone', Rate: 3.2 },
        { id: 58, title: 'Lepelela Banana', Rate: 5.0 },
      ]
    };
    return moq_list;
  }
}
