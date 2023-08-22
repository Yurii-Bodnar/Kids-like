import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../../types/types";
//PayloadAction

const initialState: IAuthState = {
  token: "1",
  data: {
    user: {
      email: "",
      id: "",
      balance: 0,
      userName: "User",
    },
  },
  week: {
    startWeekDate: "",
    endWeekDate: "",
    rewardsGained: 0,
    rewardsPlanned: 0,
    _id: "",
    tasks: [
      {
        days: [{ date: "", isActive: false, isCompeted: false }],
        id: "",
        imageUrl: "",
        reward: 0,
        title: "",
      },
    ],
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser(state) {
      state.token = "";
    },
    getUserName(state, action: PayloadAction<string>) {
      state.data.user.userName = action.payload;
    },
  },
});

// export const { } = counterSlice.actions;
export const { logoutUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
