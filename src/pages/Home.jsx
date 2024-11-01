import React from 'react'
import HomeSlider from '../components/home/HomeSlider'
import Categories from '../components/home/Categories'
import FeaturedProducts from '../components/home/FeaturedProducts'
import OfferBanners from '../components/home/OfferBanners'
import BestSeller from '../components/home/BestSeller'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='w-full'>
            <HomeSlider />
        </div>
        <div className='w-11/12 py-5'>
          <div className='title_container py-5'>
            <h1 className='title font-bold text-3xl'>Find your style : Furniture Categories</h1> </div>
            <Categories />
        </div>

        <div className='w-11/12 py-5'>
          <div className='title_container py-5 '>
            <h1 className='title font-bold text-3xl text-center'>Discover our Featured Products</h1> 
            </div>
            <FeaturedProducts />
        </div>
        <div className='w-11/12 py-5'>
          <OfferBanners />
        </div>
        <div className='w-11/12 py-5'>
          <div className='title_container py-5 '>
            <h1 className='title font-bold text-3xl text-center'>Discover our Best Seller</h1> 
            </div>
            <BestSeller />
        </div>
        <div className='w-11/12 py-5'>
          <NewsLetter />
        </div>
        <div className='w-full pt-2 px-1 pb-1'>
          
        </div>
    </div>
  )
}

export default Home