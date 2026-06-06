import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import Button from '../components/Button';

function SingleProductPage() {

    let {id} = useParams();
    let[details, setDetails] = useState(null);

    async function getData() {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        console.log(data);
        setDetails(data);
    }

    useEffect(function(){
        getData()
    },[])
    
  return details && (
    <div>
        <Header/>
        <div className='p-4'>
            <div className='grid grid-cols-2 my-20 mx-20 gap-4'>
                <img className='mx-auto' src={details.thumbnail} alt={details.title} />
                <div className='flex flex-col gap-4'>
                    <h1 className='text-purple-700 tracking-tight text-2xl'>{details.title}</h1>
                    <p className='capitalize bg-purple-300 px-4 py-2 rounded-4xl text-sm w-fit '>{details.category}</p>
                    <h4>{details.description}</h4>
                    <p className='font-semibold tracking-tight text-lg'>Price: ${details.price}</p>
                    <div className='grid grid-cols-2 gap-3'>
                        <Button text={'Buy Now'}/>
                        <Button text={'Add to Cart'}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProductPage