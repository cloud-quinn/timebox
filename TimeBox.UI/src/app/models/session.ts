export class Session {

  userId: string;  
  token: string;
  expires: string;
  username: string;

  constructor(userId: string, token: string, expires: string, username?: string) {
    this.userId = userId;
    this.token = token;
    this.expires = expires;
    this.username = username;
  }
  
}
