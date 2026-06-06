import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'

function Home() {
  return (
    <div className=''>
      <Header />
      <h1 className='px-4 text-4xl font-bold mt-10'>Home Page </h1>
      <div className='px-4 grid grid-cols-3 gap-4 mt-10'>
        <Card title="Axios" desc="used to fetch data from api"/>
        <Card title="React router Dom " desc="used to creates routes in react js"/>
        <Card title="React hooks" desc="used to use hooks in react js "/>
      </div>
    </div>
  )
}

export default Home