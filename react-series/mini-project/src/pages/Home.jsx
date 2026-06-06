import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from '../components/Card';

function Home() {
    const [products, setProducts] = useState(null);

    async function getData() {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        console.log(data);
        setProducts(data.products)
    }

    useEffect(function(){
        getData()
    }, [])
    
  return (
    <div>
        <Header/>
        <div className='p-4 grid grid-cols-3 gap-3'>
            {products && products.map(function(val){
                return<Card data={val}/>
            })}
        </div>
    </div>
  )
}

export default Home