import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtAuthModule } from './jwt-auth/jwt-auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [JwtAuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
