import {createSlice} from '@reduxjs/toolkit';

const fileReducer = createSlice({
  name: 'files',
  initialState: {
    files: [],
  },
  reducers: {
    setFiles(state, action) {
      state.files = action.payload
    },
    setFile(state, action) {
      state.files.push(action.payload);
    },
    resetFiles(state) {
      state.files = []
    },
  },
});

export default fileReducer.reducer;
export const {setFiles, setFile, resetFiles} = fileReducer.actions;
