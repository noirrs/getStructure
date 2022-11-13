import { Injectable } from '@nestjs/common';
import { Main } from './functions/main';

@Injectable()
export class AppService {
  async makeTree(
    username: string,
    repository: string,
    branch: string = 'master',
  ): Promise<string> {
    let result: Promise<string> = Main(username, repository, branch);
    return result;
  }
}
