import {createContext, useState, useEffect} from "react";
import { getProductCategories } from "../Helpers/queries";

 export const ProductContext = createContext(null)

 export const ProductContextProvider=({children})=>{
    const [products, setProducts] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            setLoading(true)
            const products = await getProductCategories()
            setProducts(products);
            setError(null)
          } catch (err) {
            console.error('Error fetching products:', err)
            setError(err.message)
          } finally {
            setLoading(false)
          }
        }
    
        fetchProducts()
      }, [])
    
 return(
    <ProductContext.Provider value={{products, loading, error}}>
        {children}
    </ProductContext.Provider>
 )
 }

