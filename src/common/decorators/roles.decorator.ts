import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
// tslint:disable-next-line: no-console
console.log(Roles);
