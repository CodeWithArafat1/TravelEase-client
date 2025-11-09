import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

export const logout = createAsyncThunk(
  "userAuth/logout",
  async (_, thankAPI) => {
    try {
      await signOut(auth);
      return true
    } catch (err) {
      return thankAPI.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  user: null,
  userLoading: true,
  error: null,
};

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.userLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(logout.pending, (state) => {
        state.userLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        (state.user = null), (state.error = null), (state.userLoading = null);
      })
      .addCase(logout.rejected, (state, action) => {
        state.userLoading = null;
        state.error = action.payload;
      });
  },
});

export const { setUser, setLoading, setError } = userAuthSlice.actions;
export default userAuthSlice.reducer;
