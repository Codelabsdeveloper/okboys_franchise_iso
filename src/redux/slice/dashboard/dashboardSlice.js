import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
    dashboardMetricsValue : [],
    dashboardMetricsValueSucc : []
};



export const dashboardSlice = createSlice({
    name: "dashboardSlice",
    initialState,
    reducers: {
      getDashboardMetricsValue: (state, action) => {
        state.dashboardMetricsValue = action.payload;
      },
      getDashboardMetricsSuccess: (state, action) => {
        state.dashboardMetricsValueSucc = action.payload;
      },
      getDashboardMetricsError: (state, action) => {
        state.dashboardMetricsValue = action.payload;
      },
      
    },
  });
  
  // Action creators are generated for each case reducer function
  export const {
    getDashboardMetricsValue,
    getDashboardMetricsSuccess,
    getDashboardMetricsError
  } = dashboardSlice.actions;
  
  export default dashboardSlice.reducer;
  