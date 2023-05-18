import { Weapon } from '@prisma/client';

export class Create {
  name: string;
  weapons: Weapon[];
}
