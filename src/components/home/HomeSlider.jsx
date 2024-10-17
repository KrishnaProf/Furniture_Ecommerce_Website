import React, {useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect } from 'react';
import {Link} from 'react-router-dom'

const HomeSlider = () => {

    const [slides, setSlides] = useState([])

   useEffect(() => {
    fetch('./img/Hero_Slider/slider.json')
    .then(response => response.json())
    .then(data => setSlides(data.heroSlider))
    .catch(error => console.log('Error:' ,error))

   },[])

  return (
    <div className='w-full'>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        
        className="mySwiper"
      >
        {slides.length > 0 && slides.map((slide) => (
            <SwiperSlide key={slide.id} className='w-full max-h-[80vh] relative'>
                <img src={slide.image} alt={`Slide` + slide.id} />
                <div className='text_container absolute top-[30%] text-center w-full h-full'>
                    <h1 className='text-5xl font-bold text-slate-800'>{slide.title}</h1>
                    <p className='text-sm italic py-3 text-gray-100'>{slide.subtitle}</p>
                    <Link to={slide.link}>
                    <button className='font-bold bg-lime-400 px-5 py-3 text-sm hover:bg-lime-600 transition ease-in duration-200'>
                        {slide.buttonText}
                    </button>
                    </Link>
                </div>
            </SwiperSlide>
        ))}
        
        
      </Swiper>
    </div>
  )
}

export default HomeSlider