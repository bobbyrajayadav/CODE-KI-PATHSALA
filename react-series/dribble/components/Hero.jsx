import React from 'react'
import HeroRight from './HeroRight'
import HeroLeft from './HeroLeft'

function Hero() {
    return (
        <div className='flex w-[90%] mx-auto'>
            <HeroLeft/>
            <HeroRight/>
        </div>
    )
}

export default Hero