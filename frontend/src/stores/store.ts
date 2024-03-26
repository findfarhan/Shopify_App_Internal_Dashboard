import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import colorSchemeReducer from "./colorSchemeSlice";
import sideMenuReducer from "./sideMenuSlice";
import themeReducer from "./themeSlice";
import compactMenuReducer from "./compactMenuSlice";
import pageLoaderReducer from "./pageLoaderSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    colorScheme: colorSchemeReducer,
    sideMenu: sideMenuReducer,
    theme: themeReducer,
    compactMenu: compactMenuReducer,
    pageLoader: pageLoaderReducer,
  },
});

export const storeDummyValues = {

    darkMode: 'false',
    colorScheme: 'theme-7',
    sideMenu: 'true',
    theme: 'razor',
    compactMenu: 'true',
    pageLoader: pageLoaderReducer,
  
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
