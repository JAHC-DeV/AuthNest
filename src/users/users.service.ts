import { Injectable } from '@nestjs/common';
import { UserEntity } from './Entity/user.entity';



@Injectable()
export class UsersService {
    private readonly users: UserEntity[] =[
        {
            id: 2,
            fullName: 'Jose A 1',
            email: 'mail@example.com',
            password: 'Password123*',
            age: 22
        }
    ] 

    public async findByEmail(email: string): Promise<UserEntity | undefined>{
        return this.users.find(u => u.email == email);
    }
    public async findById(id: number): Promise<UserEntity | undefined>{
        return this.users.find(u => u.id == id);
    }
}
