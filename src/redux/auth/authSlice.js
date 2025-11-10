import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import toast from "react-hot-toast";
const googleProvider = new GoogleAuthProvider();

// logout
export const logout = createAsyncThunk(
  "userAuth/logout",
  async (_, thankAPI) => {
    try {
      await signOut(auth);
      toast.success('Log out successfully!')
      return true;
    } catch (err) {
      return thankAPI.rejectWithValue(err.message);
    }
  }
);

// google login
export const googleLogin = createAsyncThunk(
  "userAuth/googleLogin",
  async (_, thankAPI) => {
    try {
      const createUser = await signInWithPopup(auth, googleProvider);
      const user = createUser.user;
      return user;
    } catch (err) {
      return thankAPI.rejectWithValue(err.message);
    }
  }
);

// Account Create
export const createAccount = createAsyncThunk(
  "userAuth/createAccount",
  async ({ email, password, profileObj }, thankAPI) => {
    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = createUser.user;
      if (user) {
        await updateProfile(user, profileObj);
      }
      return user;
    } catch (err) {
      return thankAPI.rejectWithValue(err.message);
    }
  }
);

export const signInEmail = createAsyncThunk(
  "userAuth/signInEmail",
  async ({ email, password }, thankAPI) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      return user;
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
    // sign out builder
    builder
      .addCase(logout.pending, (state) => {
        state.userLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.error = null;
        state.userLoading = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.userLoading = false;
        state.error = action.payload;
      });

    // google login builder
    builder
      .addCase(googleLogin.pending, (state) => {
        state.userLoading = true;
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
        state.userLoading = false;
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.error = action.payload;
        state.userLoading = false;
      });

    // create account
    builder
      .addCase(createAccount.pending, (state) => {
        state.userLoading = true;
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
        state.userLoading = false;
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.error = action.payload;
        state.userLoading = false;
      });

    // signin 
    builder
      .addCase(signInEmail.pending, (state) => {
        state.userLoading = true;
      })
      .addCase(signInEmail.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
        state.userLoading = false;
      })
      .addCase(signInEmail.rejected, (state, action) => {
        state.error = action.payload;
        state.userLoading = false;
      });
  },
});

export const { setUser, setLoading, setError } = userAuthSlice.actions;
export default userAuthSlice.reducer;
