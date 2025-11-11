import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";

import confirmModalReducer from "./features/ConfirmModalSlice";
import profileDropReducer from "./features/profileDropdownSlice";
const store = configureStore({
  reducer: {
    userAuth: authReducer,
    confirmModal: confirmModalReducer,
    profileModal: profileDropReducer,
  },
});

export default store;
