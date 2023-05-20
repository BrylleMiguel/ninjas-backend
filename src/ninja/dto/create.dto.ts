import { PrimaryWeapon } from '@prisma/client';

export class Create {
  name: string;
  primaryWeapon: PrimaryWeapon;
}
