import { RequestMethod } from "../../../utils/requestMethods";
import {
    getDashboardMetricsSuccess,
    getDashboardMetricsError
} from "./dashboardSlice";

import {
    GET_DASHBOARD_METRICS_URL,
  } from "../../../utils/Url";

  const getDashboardMetricsAction = (payload, response) => (dispatch) => {
    console.log("getDashboardMetricsSuccess ---- api call" ,GET_DASHBOARD_METRICS_URL)
    let queryParams = {};
    RequestMethod.get(GET_DASHBOARD_METRICS_URL).then(
      (res) => {
        console.log("getDashbaord acton call >>>>>>>", res);
        if (res.status == 200) {
          dispatch(getDashboardMetricsSuccess(res));
        } else {
          dispatch(getDashboardMetricsError(res));
        }
      }
    );
  };
  
  export {
    getDashboardMetricsAction
  };