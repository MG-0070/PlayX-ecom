import React from "react";
import { createContext,useContext,useReducer } from "react";
import { ProdutFilterRed } from '../Reducer/ProductFilterRed';

const FilterContext = createContext();

const ProductFilterProvider = ({children}) =>{
  const [filterState,filterdispatch] = useReducer(ProdutFilterRed,{
      sortBy: "",
      Game : false,
      Accessories : false,
      VR : false,
      Console : false,
      rating : 0,
  })
return(
    <FilterContext.Provider value={{filterState,filterdispatch}}>
        {children}
        </FilterContext.Provider>
)

}

const useProudctFilter = () =>useContext(FilterContext)

export {ProductFilterProvider,useProudctFilter}