import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { initialstate } from "./rootstore";
import { UserLogin } from "../Server/userAuth";

// -----MIDDLEWARES---

// user
export const loginUser = createAsyncThunk('user/loginUser', async ({ email, password }) => {
    const authdata = await UserLogin(email, password);
    return authdata
});


const authSlice = createSlice({
    name: 'auth',
    initialState: initialstate.usertoken,
    reducers: {
        Logout: (state) => {
            return initialstate.usertoken;
        },
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                if (!action.payload.error) {
                    return {
                        access: action.payload.access,
                    
                        is_authenticated: true,
                  
                    };
                }
            })
            
    },
});

export const { Logout } = authSlice.actions;
export default authSlice.reducer

