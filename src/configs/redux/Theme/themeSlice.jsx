import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: null,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      return {
        ...state,
        theme: action.payload,
      };
    },
  },
});

export const { actions: themeActions, reducer: themeReducers } = themeSlice;
export default themeSlice;
