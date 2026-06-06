import React, { useContext, useEffect, useState } from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { Dukaan } from '../App';

function Card({data}) {

    const navigate = useNavigate();
    let {cart, setCart} = useContext(Dukaan)
    const [text, setText] = useState('Add to Cart');

    function addToCart(){
        setCart([...cart, data])
    }

    function removeFromCart(){
      let newCart = cart.filter(function(val){
        return val.id !== data.id;
      })
      setCart(newCart)
    }

    useEffect(function(){
      if(cart.some(function(val){
        return val.id === data.id;
      })){
        setText('Remove from Cart');
      }else{
        setText('Add to Cart');
      }
    }, [cart])



    function navigateToSinglePage(){
        console.log(data.id)
        navigate(`/${data.id}`)
    }
    
  return (
    <div className='bg-zinc-200 p-1 flex flex-col gap-2'>
        <img className='mx-auto' src={data.thumbnail} alt={data.title} />
        <h1 className='text-xl font-medium tracking-tighter'>{data.title}</h1>
        <p className='capitalize bg-purple-300 px-4 py-2 rounded-4xl text-sm w-fit '>{data.category}</p>
        <p className='font-semibold tracking-tight text-lg'>Price: ${data.price}</p>

        <div className='grid grid-cols-2 gap-3'>
        <Button handleClick={navigateToSinglePage} text={'View Details'}/>
        <Button handleClick={text === 'Add to Cart' ? addToCart : removeFromCart} text={text}/>
        </div>
    </div>
  )
}

export default Card