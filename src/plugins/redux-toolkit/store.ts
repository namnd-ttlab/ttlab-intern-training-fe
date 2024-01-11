import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { appReducer } from "@common/reducers/app.reducer";

import { settingListenerMiddleware } from "./middleware/settings";
import productReducer from "@features/product/reducers/product.reducer";

export function makeStore() {
  return configureStore({
    reducer: {
      app: appReducer,
      product: productReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types
          ignoredActions: [],
          // Ignore these field paths in all actions
          ignoredActionPaths: ["meta.arg"],
          // Ignore these paths in the state
          ignoredPaths: [],
        },
      }).concat([settingListenerMiddleware.middleware]),
    devTools: process.env.NODE_ENV !== "production",
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
