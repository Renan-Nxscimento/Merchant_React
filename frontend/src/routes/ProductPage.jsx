import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import productFetch from '../axios/config';
import Main from '../components/productPage/mainPart/Main';

const ProductPage = () => {
    const {id} = useParams();
    const [products, setProducts] = useState([])
        
                const fetchData = () => {
                    fetch('http://localhost:4000/products')
                    .then(res => res.json())
                    .then(data => {
                      setProducts(data)
                    })
                  }
                
                  useEffect(() => {
                    fetchData()
                  }, [])

    const Product = products.find(product => String(product._id) === id);

  return (
    <>
      {Product ? (  
          <Main Product={Product}/>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProductPage
