import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { FetchProducts } from '../../Redux/Products/actions'
import styles from "./styles.module.css";
import ProductCard from '../../components/ProductsCards/ProductCard';

const Products = () => {

  const {products} = useSelector(state => state.ProductsReducer)


 const dispatch = useDispatch()

    useEffect(() => {
      dispatch(FetchProducts("https://run.mocky.io/v3/ebee18cb-838a-440f-bf61-e406587748a2"))
    }, [])
    
    return (
      <div className={styles.productsContainer}>
        {products?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    );
 
}

export default Products