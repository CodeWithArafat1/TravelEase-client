import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const updateModalSlice = createSlice({
  name: "updateModal",
  initialState,
  reducers: {
    updateModalOpen: (state) => {
      state.isOpen = true;
    },
    updateModalClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { updateModalClose, updateModalOpen } = updateModalSlice.actions;

export default updateModalSlice.reducer;
