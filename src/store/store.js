import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import { reducer as favoritesReducer } from "./favorites/favorites.slice";
import { reducer as userReducer } from "./user/user.slice";

const reducers = combineReducers({
  favorites: favoritesReducer,
  user: userReducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
