import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDto } from "./dtos/user.dto";

export type AuthState = {
    user: UserDto | undefined
}

const initialState: AuthState = {
    user: undefined
}

export const authSlice = createSlice({
    initialState,
    name: "authSlice",
    reducers: {
        setUser: (state, action: PayloadAction<UserDto>) => {
            state.user = action.payload;
        },
        resetAuth: () => {
            
        },
    },
});

export default authSlice.reducer;