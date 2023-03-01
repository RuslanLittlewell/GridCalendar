import { useRoutes } from "react-router-dom";

import { lazy } from "react";

const WeekCalendar = lazy(() => import("./WeekCalendar"));


export const Routing = () => {
  
  return useRoutes([
    { path: '/', element: <WeekCalendar /> },
  ]);
};