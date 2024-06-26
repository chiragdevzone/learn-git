import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthType {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  authStatus?: boolean;
}

const initialState: AuthType = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  authStatus: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupAuth: (state, action: PayloadAction<AuthType>) => {
      const { firstName, lastName, email, password } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.password = password;
    },

    loginAuth: (state, action: PayloadAction<AuthType>) => {
      const { authStatus } = action.payload;
      state.authStatus = authStatus;
    },

    logoutAuth: (state) => {
      state.authStatus = false;
    },
  },
});

export const { signupAuth, logoutAuth, loginAuth } = authSlice.actions;
export default authSlice.reducer;
