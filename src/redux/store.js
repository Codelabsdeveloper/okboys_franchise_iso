import { configureStore } from "@reduxjs/toolkit";

import dashboardReducer from "./slice/dashboard/dashboardSlice";

export const store = configureStore({
    reducer: {
        dashboard : dashboardReducer,
    },
  });