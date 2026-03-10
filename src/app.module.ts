import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Import your modules here

@Module({
  imports: [
    // Your modules go here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}