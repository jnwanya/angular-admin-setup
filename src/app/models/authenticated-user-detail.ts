import {Company} from './entities/company';
import {AppUser} from './entities/app-user';
import {UserRole} from './entities/user-role';

export interface AuthenticatedUserDetail {
   company: Company;
   user: AppUser;
   userRoles: Array<UserRole>;
}
