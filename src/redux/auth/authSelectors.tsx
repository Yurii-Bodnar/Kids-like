import { RootState } from "../store";

export const selectToken = (state: RootState) => state.auth.token;
export const selectBalance = (state: RootState) => state.auth.data.user.balance;
export const selectUserName = (state:RootState)=>state.auth.data.user.userName