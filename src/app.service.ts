import { Injectable } from '@nestjs/common';

@Injectable() // Makes sure that this service is available for injection.
export class AppService {
  getLandingPage(): string {
    return 'Your application is running successfuly..';
  }
}
