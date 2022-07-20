import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // Pega alguma coisa do banco de dados e retorna para o frontend
  GetSomethingCoisa(): string {
    return 'Something Coisa';
  }
}
