import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  List: [],
  status: 'Under Construction',
};

const CatogerySlice = createSlice({
  name: 'Catogery',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export default CatogerySlice.reducer;
export const { setStatus } = CatogerySlice.actions;
