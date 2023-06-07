import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@prisma/client';

export const Me = createParamDecorator(
  async (data: any, context: ExecutionContext): Promise<User | null> => {
    const request = context.switchToHttp().getRequest();
    return request.user;
  },
);
