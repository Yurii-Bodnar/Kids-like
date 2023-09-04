import { RootState } from "../store";

export const selectToken = (state: RootState) => state.auth.token;
export const selectBalance = (state: RootState) => state.auth.user.balance;
export const selectUserName = (state: RootState) => state.auth.user.email;
export const selectErrorMessage = (state: RootState) => state.auth.error;
export const selectSuccessMessage = (state: RootState) =>
  state.auth.successMessage;
