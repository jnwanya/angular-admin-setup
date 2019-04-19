import {TokenDetail} from './token-detail';

export interface UserToken {
   accessToken: TokenDetail;
   refreshToken: TokenDetail;
}
