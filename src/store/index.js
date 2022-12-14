import { configureStore } from "@reduxjs/toolkit";
import user from "../components/user/userSlice";
import courses from "../components/education/coursesSlice";
import news from "../components/newsAndAnalyses/newsList/newsSlice";

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }
  return next(action);
};

const store = configureStore({
  reducer: { user, courses, news },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
