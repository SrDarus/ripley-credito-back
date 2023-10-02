import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { IntegrationsService } from './integrations.service';

@Module({
  imports:[
    HttpModule,
  ],
  providers: [IntegrationsService],
  exports: [IntegrationsService]
})
export class IntegrationsModule {}
