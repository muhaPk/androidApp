import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const fileReducer = createSlice({
  name: 'files',
  initialState: {
    files: [],
  },
  reducers: {
    setFiles(state, action: PayloadAction<any>) {
      state.files = action.payload
    },
    setFile(state, action: PayloadAction<any>) {
      state.files.push(action.payload);
    },
    clearFiles(state) {
      state.files = []
    },
  },
});

export default fileReducer.reducer;
export const {setFiles, setFile, clearFiles} = fileReducer.actions;
