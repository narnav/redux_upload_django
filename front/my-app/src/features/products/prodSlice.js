import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProds,addProd } from './prodAPI';

const initialState = {
  total: 0,
  status: 'idle',
  prods:[]
};

export const getProdsAsync = createAsyncThunk(
  'prod/getProds',
  async () => {
    // console.log(formData);
    const response = await getProds();
    
    return response.data;
  }
);
export const addProdAsync = createAsyncThunk(
    'prod/addProd',
    async (prod) => {
      const response = await addProd(prod);
      return response.data;
    }
  );

export const prodSlice = createSlice({
  name: 'prod',
  initialState,
  reducers: {
    increment: (state) => {
    //   state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProdsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProdsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // console.log(action.payload);
        state.prods = action.payload;
      }).addCase(addProdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // console.log(action.payload);
        state.prods.push( action.payload);
      });
  },
});

export const { increment} = prodSlice.actions;
export const selectProds = (state) => state.prod.prods;
export default prodSlice.reducer;
