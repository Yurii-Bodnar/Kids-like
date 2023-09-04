import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IAuthResponse, IUser } from "../../types/types";

axios.defaults.baseURL = "https://kidslike-v1-backend.goit.global";

export const registerUser = createAsyncThunk<
  IAuthResponse,
  IUser,
  { rejectValue: string }
>("auth/register", async function (user, thunkApi) {
  try {
    const res = await axios.post("/auth/register", user);
    console.log(res.data);
    return res.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});
