import {Address} from './address';

export interface AppUser {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  profileImageId: number;
  address: Address;
}
