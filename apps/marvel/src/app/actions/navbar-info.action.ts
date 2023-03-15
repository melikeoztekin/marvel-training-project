import { UserModel } from '../shared/models/user.model';

export class GetUserName {
  static readonly type = '[getUserName] Get';
  constructor(public payload: UserModel) {}
}
