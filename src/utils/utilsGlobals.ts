import { UnauthorizedException } from "@nestjs/common";

export class UtilsGlobals {
    public static getTokenBearer(data: string): string {        
        if(data.search("Bearer"))
            throw new UnauthorizedException("Format Token not valid.")
        const token = data.split(" ")[1];
        if(token == undefined || token == "")            
            throw new UnauthorizedException("Token is required.")
        return token;
    }
}