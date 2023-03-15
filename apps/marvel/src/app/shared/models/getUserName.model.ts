import { UserModel } from './user.model';

export interface GetUserNameModel {
  userId: number;
  user: UserModel;
}
