import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: true,
};

export const loadCategories = createAsyncThunk(
  "categories",
  async (args, thunkApi) => {
    const response = await fetch("https://tfruitapi.vercel.app/categories");
    const data = await response.json();

    return data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadCategories.fulfilled, (state, action) => {
      return {
        data: action.payload,
        loading: false,
      };
    });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
export const categoriesSelector = (state) => state.categories.data;
