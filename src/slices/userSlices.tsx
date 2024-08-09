// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// type User = {
//   id: number;
//   email: string;
//   first_name: string;
//   last_name: string;
//   avatar: string;
// };

// type UserState = {
//   users: User[];
//   selectedUser?: User;
// };

// const initialState: UserState = {
//   users: [],
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUsers: (state, action: PayloadAction<User[]>) => {
//       state.users = action.payload;
//     },
//     setSelectedUser: (state, action: PayloadAction<User>) => {
//       state.selectedUser = action.payload;
//     },
//     addUser: (state, action: PayloadAction<User[]>) => {
//       state.users = action.payload;
//     }
//   },
// });

// export const { addUser,setUsers, setSelectedUser } = userSlice.actions;
// export default userSlice.reducer;

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar?: string;
}

interface UserState {
  users: User[];
  selectedUser: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  users: [],
  selectedUser: null,
  status: 'idle',
  error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://reqres.in/api/users');
  return response.data.data; // Adjust this line according to the structure of your API response
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    setSelectedUser: (state, action: PayloadAction<User | null>) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export const { addUser, setSelectedUser } = userSlice.actions;

export default userSlice.reducer;
