import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "shared/api/models";
import { fetchTasks } from './actions'



const todoSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [] as Task[],
    calendarSize: 15,
    loading: false as boolean,
    error: null,
  },
  reducers: {
    changeCalendarSize: (state, action: PayloadAction<number>) => ({
      ...state,
      calendarSize: action.payload
    })
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.tasks = action.payload;
    })
  }
})
export const { changeCalendarSize } = todoSlice.actions;
export default todoSlice;
