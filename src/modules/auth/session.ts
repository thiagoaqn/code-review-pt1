import { Injectable, Scope } from "@nestjs/common";

@Injectable()
export class Session {
  public kid_token_store: string;
  public accessToken: string;
}
