import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenDropdown: false,
};

const profileDropdownSlice = createSlice({
  name: "profileDropdown",
  initialState,
  reducers: {
    isDropOpen: (state) => {
      state.isOpenDropdown = true;
    },
    isDropClose: (state) => {
      state.isOpenDropdown = false;
    },
  },
});

export const { isDropClose, isDropOpen } = profileDropdownSlice.actions;

export default profileDropdownSlice.reducer;
