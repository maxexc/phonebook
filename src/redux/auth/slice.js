import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { logIn, logOut, refreshUser, register } from './operations';


const authSlice = createSlice({
  name: 'auth',
  initialState: {    
      user: {name: null, email: null},
      token: null,
      isLoggedIn: false,
      isRefreshing: false,
    },
    
    extraReducers: builder =>
      builder
        .addCase(register.pending, (state, action) => state)
        .addCase(register.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
          toast.success('Your account was successfully created');
        })
        .addCase(register.rejected, (state, action) => state)
        .addCase(logIn.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
          toast.success(`Welcome ${action.payload.user.name}`);
        })
        .addCase(logIn.rejected, (state, action) => {
          toast.error('Incorrect email or password! Please try again');
        })
        .addCase(logOut.fulfilled, state => {
          state.user = {name: null, email: null};
          state.token = null;
          state.isLoggedIn = false;
          toast.success('Goodbye')
        })   
        .addCase(refreshUser.fulfilled, (state, action) => {
          state.user = action.payload;
          state.isLoggedIn = true;          
          state.isRefreshing = false;
          // toast.success('Wellcome back!')
        })
        // .addCase(refreshUser.pending, (state, action) => {
        //   state.isRefreshing = false;
        // })        
  })

export const authReducer = authSlice.reducer;

// ---either---
// extraReducers: {
//   [register.fulfilled](state, action) {
//     state.user = action.payload.user;
//     state.token = action.payload.token;
//     state.isLoggedIn = true;
//     // toast.success('Your account was successfully created');
//   },
//   [register.rejected]() {
//     // toast.error('User creation error. Try again with another email address');
//   },
//   [logIn.fulfilled](state, action) {
//     state.user = action.payload.user;
//     state.token = action.payload.token;
//     state.isLoggedIn = true;
//     // toast.success(`Welcome ${action.payload.user.name}`);
//   },
//   [logIn.rejected]() {
//     // toast.error('Incorrect email or password! Please try again');
//   },
//   [logOut.fulfilled](state) {
//     state.user = { name: null, email: null };
//     state.token = null;
//     state.isLoggedIn = false;
//     // toast.success('Goodbye')
//   },
//   [refreshUser.fulfilled](state, action) {
//     state.user = action.payload;
//     state.isLoggedIn = true;
//   },
// }
