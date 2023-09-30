import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allConnectors: null as { [id: string]: any } | null,

}

export const connectorSlice = createSlice({
  name: "connectors",
  initialState,
  reducers: {
    fetchConnectersReducer() { },
  }
})

// Action creators are generated for each case reducer function
export const {
    fetchConnectersReducer
} = connectorSlice.actions

export default connectorSlice.reducer;
