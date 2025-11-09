import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import updateModalReducer from './features/updateModalSlice'
const store = configureStore({
  reducer: {
    userAuth: authReducer,
    updateModal: updateModalReducer
  },
});

export default store;
