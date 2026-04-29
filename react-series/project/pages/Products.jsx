import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

function Products() {

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const res = await fetch('https://dummyjson.com/products')
    const { products } = await res.json()
    setProducts(products)
  } 

  const navigate = useNavigate()
  
  function redirectToProductDetail(id){
    navigate(`/product/${id}`)
  }

  useEffect(() => {
    getProducts()
  },[])

  
  return (
    <div className='grid grid-cols-5 gap-4 mt-4'>
        {products.map((item , index) => {
            return (
              <div key={index} className='bg-gray-200 border border-gray-300 rounded-lg shadow-lg p-4  '>
                <img className=' object-contain mx-auto ' src={item.thumbnail} alt="Product Image" />
                <h1 className='mt-4'>{item.title}</h1>
                <p className='mt-3'>{item.category}</p>
                <p className='mt-3 mb-3'>${item.price}</p>
                <Button handleClick={() => redirectToProductDetail(index + 1)} text="View Details"/>
              </div>
            )
        })}
    </div>
  )
}

export default Products