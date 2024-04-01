import { configureStore } from "@reduxjs/toolkit";

import coursesSlice from '../rtk/coursesSlice';

export default configureStore({
  reducer: {
    courses:coursesSlice ,
  },
});