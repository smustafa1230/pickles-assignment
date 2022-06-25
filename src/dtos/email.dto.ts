import { IsObject, IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class SendEmailDto {
  @IsString()
  @IsNotEmpty()
  public templateName: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  public sendTo: string;

  @IsObject()
  @IsNotEmpty()
  public data: Object;
}
