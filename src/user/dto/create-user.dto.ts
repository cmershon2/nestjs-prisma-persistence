import {
    IsDefined,
    IsNotEmpty,
    IsEmail,
    MinLength,
    MaxLength,
  } from 'class-validator';
    
  export class createUser {
    @IsDefined()
    @IsNotEmpty()
    @MinLength(3, {
      message: 'Username is too short. Minimal length is $constraint1 characters',
    })
    @MaxLength(25, {
      message: 'Username is too long. Maximum length is $constraint1 characters',
    })
    readonly displayName: string;
  
    @IsDefined()
    @IsEmail()
    readonly email: string;
  
    @IsDefined()
    @IsNotEmpty()
    @MinLength(8)
    readonly password: string;
}
  