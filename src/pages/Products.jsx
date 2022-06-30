import React, { useState } from 'react'
import { useEffect } from 'react';
import { BASE_URL } from '../api/ApiConfig';
import ProductList from '../components/productlist/ProductList';

const Products = () => {
    const [products,setProducts]=useState([]);
    // const [searchText,setSearchText]=useState("");  
    // const [filteredProducts,setFilteredProducts]=useState([]);
    const [loading,setLoading]=useState(false);


    useEffect(() => {
      const getProductList=()=>{
        fetch(`${BASE_URL}/api/Product}`)
        .then((c)=>c.json())
        .then((c)=>{
            setProducts(c);
            setLoading(true);
        })
      }
      getProductList();
    }, []);

    // const submitHandle=(e)=>{
    //     e.preventDefault()
    //     let productNews=products.filter(c=>c.name.toLowerCase().includes(searchText.toLowerCase()));
    //     setFilteredProducts(productNews)
    // }
    
    return (
    <>
    <ProductList loading={loading} data={products}/>
    </>
  )
}

export default Products