import {createContext, useState, useEffect} from "react";
import { getProductCategories } from "../Helpers/queries";

 export const ProductContext = createContext(null)

 export const ProductContextProvider=({children})=>{
    const [products, setProducts] = useState(false)

    useEffect(() => {
        const fetchProducts = async () => {
          const products = await getProductCategories()
          setProducts(products);
        }
    
        fetchProducts()
      }, [])
    
 return(
    <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
 )
 }

