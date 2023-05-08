import {createSlice} from '@reduxjs/toolkit';

const usersReducer = createSlice({
  name: 'users',
  initialState: {
    users: [],
    currentUser: {},
    isAuth: false,
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload
    },
    setUser(state, action) {
      state.currentUser = action.payload
      state.isAuth = true
    },
    logout(state) {
      state.currentUser = {}
      state.isAuth = false
    },
  },
});

export default usersReducer.reducer;
export const {setUser, setUsers, logout} = usersReducer.actions;