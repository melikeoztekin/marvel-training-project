import { Action, State, StateContext } from '@ngxs/store';
import { GetUserName } from '../actions/navbar-info.action';
import { GetUserNameModel } from '../shared/models/getUserName.model';

const initialState = {
  getUserName: {} as GetUserNameModel,
};
export class GetUserStateModel {
  getUserName: GetUserNameModel;
}

@State<GetUserStateModel>({
  name: 'get_username',
  defaults: initialState,
})
export class GetUserNameState {
  @Action(GetUserName) getUserName(
    ctx: StateContext<GetUserStateModel>,
    { payload }: GetUserName
  ) {
    const state = ctx.getState();
    ctx.patchState({
      getUserName: { userId: payload.id, user: payload },
    });
  }
}
