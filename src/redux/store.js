import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import updateModalReducer from './features/updateModalSlice'
import confirmModalReducer from './features/ConfirmModalSlice'
const store = configureStore({
  reducer: {
    userAuth: authReducer,
    updateModal: updateModalReducer,
    confirmModal: confirmModalReducer
  },
});

export default store;
