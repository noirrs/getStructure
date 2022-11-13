import {
  Controller,
  Get,
  Post,
  HttpException,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FastifyRequest } from 'fastify';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('')
  async getTree(@Req() Request: FastifyRequest): Promise<string> {
    let { username, repository, branch } = Request.body as any;
    if (!username || !repository)
      throw new HttpException(
        'Missing request body field',
        HttpStatus.BAD_REQUEST,
      );
    return this.appService.makeTree(username, repository, branch);
  }
}
