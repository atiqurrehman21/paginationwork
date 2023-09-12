import React, { useEffect, useMemo, useState } from 'react'
import ProductList from './ProductList'
import ESidebarFilter from './ESidebarFilter'

const Ecommerce = () => {
    const [productList, setproductList] = useState([]);
    const [filterproducts,setFilterProducts]=useState([])
    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((json) => {
            let temp = [...json];
            setproductList(temp);
            setFilterProducts(temp)
          });
      }, []);
  return (
    <div className='flex p-6'>
        <ESidebarFilter productList={productList}  setFilterProducts={setFilterProducts} filterproducts={filterproducts}/>
        <ProductList productList={filterproducts} setproductList={setproductList}/>
    </div>
  )
}

export default Ecommerce