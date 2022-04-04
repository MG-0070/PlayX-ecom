import { createContext,useContext,useState,useEffect } from "react";
import useAxios from "../Utils/useAxios";

const productContext = createContext()

const ProductProvider = ({children}) =>{
  const [prodData, setProdData] = useState([]);
    const {apiData,loader} = useAxios("/api/products");
    useEffect(() => {
      if (!loader) {
        setProdData([...apiData.products]);
      }
    }, [loader]);
    
    return(
  <productContext.Provider value={{prodData}}>
      {children}
  </productContext.Provider>
);

}
const useProduct = () =>useContext(productContext)
export {ProductProvider,useProduct}