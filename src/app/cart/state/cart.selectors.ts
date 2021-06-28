import { adapter } from "./cart.reducer";

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = adapter.getSelectors();
  
  
  // ====================== entities selector =============================== 
  export const selectCartId = selectIds;
  
  // object key: CartItem.id; value: CartItem
  export const selectCartEntities = selectEntities;
  
  export const selectCartItems = selectAll;
  
  export const selectTotalCartItems = selectTotal;
  