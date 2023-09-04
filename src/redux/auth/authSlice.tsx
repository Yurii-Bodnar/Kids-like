import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAuthResponse, IAuthState } from "../../types/types";
import { registerUser } from "./authOperation";
//PayloadAction

const initialState: IAuthState = {
  token: "",
  user: {
    email: "",
    id: "",
    balance: 0,
  },
  week: {
    startWeekDate: "",
    endWeekDate: "",
    rewardsGained: 0,
    rewardsPlanned: 0,
    _id: "",
    tasks: [
      {
        title: "",
        reward: 0,
        imageUrl: "",
        days: [{ date: "", isActive: false, isCompeted: false }],
        id: null,
      },
    ],
  },
  isLoading: false,
  error: "",
  successMessage: "",
};

const pendingHandlerAuth = (state: IAuthState): void => {
  state.isLoading = true;
  state.error = "";
  state.successMessage = "";
};

const rejectedHandler = (state: IAuthState, action: any): void => {
  state.isLoading = false;
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, pendingHandlerAuth);
    builder.addCase(registerUser.rejected, rejectedHandler);
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.error = "";
      state.isLoading = false;
      state.successMessage = action.payload.message;
    });
  },
});

// export const { } = counterSlice.actions;
export const {} = authSlice.actions;
export const authReducer = authSlice.reducer;
