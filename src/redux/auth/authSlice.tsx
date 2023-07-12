import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
  token: string;
  data: {
    user: {
      email: string;
      id: string;
      balance: number;
    };
  };
  week: {
    startWeekDate: string;
    endWeekDate: string;
    rewardsGained: number;
    rewardsPlanned: number;
    _id: string;
    tasks: [];
  };
}

const initialState: IAuthState = {
  token:'',
  data:{
    user:{
      email:'',
      id:'',
      balance:0
    }
  },
  week: {
    startWeekDate: '',
    endWeekDate: '',
    rewardsGained: 0,
    rewardsPlanned: 0,
    _id:'',
    tasks: []
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
 
 
  },
});

// export const { } = counterSlice.actions;


export const authReducer = authSlice.reducer;
