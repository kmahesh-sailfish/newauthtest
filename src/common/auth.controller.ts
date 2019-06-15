import { Controller, Get, UseGuards, Body, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { getMetadataArgsStorage } from 'typeorm';
import { json } from 'body-parser';
import { RolesGuard } from './gurads/role.guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  async createToken(@Body() payload): Promise<any> {
    const newUser = await this.authService.createUser(payload);
    return await this.authService.generateToken(newUser);
  }

  @Post('login')
  async getlogin(@Body() payload): Promise<any> {

    const newUser = await this.authService.login(payload);
    return await this.authService.generateToken(newUser);
  }

  @Post('data')
  @UseGuards(AuthGuard())
  findAll(@Body() payload) {
// tslint:disable-next-line: no-console
   console.log(payload);
  }
  @Get('data')
  @UseGuards(AuthGuard())
  getall(): Promise<any> {
    return;
    // this route is restricted by AuthGuard
    // JWT strategy
  }
  @Get('sample')
  getData() {
    return ;
  }
}
