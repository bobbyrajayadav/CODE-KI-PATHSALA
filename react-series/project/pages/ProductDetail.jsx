import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState({})

  const getProduct = async () => {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await res.json()
    setProduct(data)
  }

  useEffect(() => {
    getProduct()
  }, [id])

  return (
    <div className='px-8 mt-4'>
      <Navbar/>
      <div className="flex mt-4 gap-5 justify-around">
        <img src={product.thumbnail} alt="" />
        <div className="mt-10">
          <h1 className='text-4xl font-semibold mb-2'>{product.title}</h1>
          <p className='font-light text-gray-500 text-lg'>{product.category}</p>

          <div className='flex items-center gap-5 mt-4'>
            <h1 className='text-3xl text-red-500 font-bold'>${product.price}</h1>
            <p className='text-lg text-green-600'>Rating: {product.rating}</p>
          </div>

          <p className='mt-8 text-gray-600 leading-relaxed max-w-2xl'>{product.description}</p>

          <div className='mt-10 flex items-center gap-4'>
            <button className='bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700'>
              Add to Cart
            </button>
            <button className='border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50'>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail