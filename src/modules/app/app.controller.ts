import { RequestDTO } from './dtos/request.dto';
import {
  Controller,
  Get,
  Post,
  HttpException,
  HttpStatus,
  Req,
  Body,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { FastifyRequest } from "fastify";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getTree(@Body() body: RequestDTO): Promise<string> {
          let { username, repository, branch } = body;
    if (!username || !repository)
      throw new HttpException(
        "Missing request body field",
        HttpStatus.BAD_REQUEST
      );

    return this.appService.makeTree(username, repository, branch);
  }
}
