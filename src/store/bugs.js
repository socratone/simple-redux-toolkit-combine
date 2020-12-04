import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    bugAdded: (state, action) => {
      state.push({
        id: ++lastId,
        description: action.payload.description
      });
    },
    bugRemoved: (state, action) => {
      return state.filter(obj => obj.id !== action.payload.id);
    }
  }
});

export const { bugAdded, bugRemoved } = slice.actions;
export default slice.reducer;