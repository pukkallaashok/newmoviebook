import { createSlice } from "@reduxjs/toolkit";

const LangSlice = createSlice({
  name: "lang",
  initialState: {
    langType: "en",
  },
  reducers: {
    addLangChange: (state, action) => {
      state.langType = action.payload;
    },
  },
});

export const { addLangChange } = LangSlice.actions;
export default LangSlice.reducer;
