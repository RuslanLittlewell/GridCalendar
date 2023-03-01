import { createAsyncThunk, createAction  } from "@reduxjs/toolkit";
import { apiInstance } from 'shared/api/base';
import { Task } from "shared/api/models";

const BASE_URL = "/todos";

export const fetchTasks = createAsyncThunk<Task[]>(
  'tasks/fetchTasks',
  async function(_, {rejectWithValue}) {
    try {
      const response = await apiInstance.get(BASE_URL);
      return response.data;
    } catch(error: any) {
      return rejectWithValue(error.message);
    }
  }
)