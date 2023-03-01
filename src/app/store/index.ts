import { configureStore, combineReducers } from "@reduxjs/toolkit";
import TasksReducer from 'modules/CalendarGrid/redux';

const rootReducer = combineReducers({
  tasks: TasksReducer.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
})