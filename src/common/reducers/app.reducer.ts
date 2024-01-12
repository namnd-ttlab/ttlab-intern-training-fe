import { SupportLanguage } from "@common/constants";
import { IAppState } from "@common/interfaces";
import { storage } from "@common/localStorage/localStorage";
import { AppState } from "@plugins/redux-toolkit/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IAppState = {
  currentLanguage:
    (storage.get("currentLanguage") as SupportLanguage) || SupportLanguage.JA,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { setCurrentLanguage } = appSlice.actions;

export const appSelector = (state: AppState) => state.app;
export const currentLanguageSelector = (state: AppState) =>
  state.app.currentLanguage;

export const appReducer = appSlice.reducer;
