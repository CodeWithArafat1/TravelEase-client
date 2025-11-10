import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const confirmModalSlice = createSlice({
  name: "confirmModal",
  initialState,
  reducers: {
    openConfirmModal: (state) => {
      state.isOpen = true;
    },
    closeConfirmModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openConfirmModal, closeConfirmModal } =
  confirmModalSlice.actions;
export default confirmModalSlice.reducer;
