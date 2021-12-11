import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/** 
 * Modules are used to package providers(which are basically services) with controllers.
*/

@Module({
  imports: [], // used to import other modules, aka connecting this module to other modules.
  controllers: [AppController],
  providers: [AppService], // adding serivces to providers allows nest to inject them into controllers.
                           // AppService would now be available to AppController
  // VIP Note: services are scoped to the module they are declared in, so if you 
  // injected a service into a module X, module Y will not be able to access it unless 
  // it is also declared in module Y.
})
export class AppModule {}
