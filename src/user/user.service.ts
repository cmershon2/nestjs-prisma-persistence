import { Injectable } from '@nestjs/common';
import { PersistenceService } from '../persistence/persistence.service';
import { createUser } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { hashPassword } from './utils/user.utils';

@Injectable()
export class UserService {
  constructor(private readonly persistenceService: PersistenceService) {}

  async createUser(createNewUser: createUser): Promise<User> {
    const passwordHash = await hashPassword(createNewUser.password);

    const user = await this.persistenceService.user.create({
        data: {
          email: createNewUser.email,
          displayName: createNewUser.displayName,
          password: passwordHash,
        },
    });
    
    return user
  }

  async getUserById(id: number) {
    return this.persistenceService.user.findUnique({
      where: { id },
    });
  }
}
