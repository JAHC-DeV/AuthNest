import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";


export class LoginRequest{
    @IsEmail({},{message: "An email was expected in this field"})
    @ApiProperty({type:String,default:"mail@example.com"})
    public email: string;
    @IsString()
    @ApiProperty({type:String, default:"Password123*"})
    public password: string;
}