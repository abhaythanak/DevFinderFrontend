import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    addConnections: (state, action) => {
      return action.payload;
    },
    removeaddConnections: (state, action) => {
      return null;
    },
  },
});

export const { addConnections, removeaddConnections } = connectionSlice.actions;

export default connectionSlice.reducer;
