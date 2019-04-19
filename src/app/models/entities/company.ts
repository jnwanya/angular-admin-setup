import {Address} from './address';

export interface Company {
   companyId: string;
   name: string;
   logoId: string;
   companyType: string;
   address: Address;
}
