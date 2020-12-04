import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    itemAdded: (state, action) => {
      state.push({
        id: ++lastId,
        description: action.payload.description
      });
    },
    itemRemoved: (state, action) => {
      return state.filter(obj => obj.id !== action.payload.id);
    }
  }
});

export const { itemAdded, itemRemoved } = slice.actions;
export default slice.reducer;