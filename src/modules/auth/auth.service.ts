import { v4 as Uuid } from 'uuid';

import { Injectable } from '@nestjs/common';
import { User } from './user';
import { Token } from './token';
import { Session } from './session';

@Injectable()
export class AuthService {
  constructor(private readonly session: Session) { }

  authenticate(user: User): Token {
    if (user.status === 2 && user.org_status === 3 && user.username !== "" && user.kid === this.session.kid_token_store) {
      return {
        accessToken: this.session.accessToken,
        expiresIn: 3600,
      };
    }

    if (user.password === '1234' && user.username === 'admin') {
      this.session.kid_token_store = user.kid;
      this.session.accessToken = Uuid();

      return {
        accessToken: this.session.accessToken,
        expiresIn: 3600,
      };
    }

  }
}
