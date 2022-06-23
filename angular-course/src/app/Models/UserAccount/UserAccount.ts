export class UserAccount {
   public Username: string;
   public EmailAddress: string;
   public Password: string;


  constructor(userLogging?: any) {
    this.Username = userLogging?.Username;
    this.Password = userLogging?.password;
    this.EmailAddress = userLogging?.EmailAddress;
  }

}
