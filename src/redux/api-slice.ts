import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ResultsType, TestResultsDataType} from '../../apiTypes';
import {MAIN_URL} from '../constants';
import {RootState} from './store';
const axios = require('axios');

interface ApiState {
  tests?: TestResultsDataType[];
  results?: ResultsType[];
  loading: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}

export const apiSlide = createSlice({
  name: 'api',
  initialState: {
    loading: 'idle',
  } as ApiState,
  reducers: {
    saveTests: (state: any, action: any) => {
      state.tests = [action.payload];
    },
    saveResults: (state: any, action: any) => {
      state.results = [action.payload];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getResults.pending, (state: any) => {
        state.loading = 'loading';
      })
      .addCase(getResults.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.results = action.payload;
      })
      .addCase(getResults.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      })
      .addCase(getTests.pending, (state: any) => {
        state.loading = 'loading';
      })
      .addCase(getTests.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.tests = action.payload;
      })
      .addCase(getTests.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getResults = createAsyncThunk('api/results', async () => {
  const response = await axios.get(`${MAIN_URL}/results`);
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});

export const getTests = createAsyncThunk('api/tests', async () => {
  const response = await axios.get(`${MAIN_URL}/tests`);
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});

export const tests = (state: RootState) => state.api.tests;
export const results = (state: RootState) => state.api.results;
export const isLoading = (state: RootState) => state.api.loading;
export const error = (state: RootState) => state.api.error;
export const {saveResults, saveTests} = apiSlide.actions;
export default apiSlide.reducer;
