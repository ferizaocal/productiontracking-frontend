import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import ProductionModelResponse from '../../dto/Response/ProductionModelResponse';
import {getAllProductionModelsByActive} from '../../services/ProductionModelService';
export interface ProductionModelState {
  activeProductionModels: ProductionModelResponse[];
}

const INITIAL_STATE: ProductionModelState = {
  activeProductionModels: [],
};

export const fetchActiveProductionModels = createAsyncThunk(
  'productionModel/fetchActiveProductionModels',
  async () => {
    const response = await getAllProductionModelsByActive();
    return response.data.list;
  },
);

const productionModelSlice = createSlice({
  name: 'productionModel',
  initialState: INITIAL_STATE,
  reducers: {
    setActiveProductionModels: (state, action) => {
      state.activeProductionModels = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchActiveProductionModels.fulfilled, (state, action) => {
      state.activeProductionModels = action.payload;
    });
  },
});
const ProductionModelReducer = productionModelSlice.reducer;
export default ProductionModelReducer;
export const ProductionModelActions = productionModelSlice.actions;
