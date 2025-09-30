import React from 'react';

import NavBar from '../Components/NavBar';

import { CCarousel, CCarouselItem, CImage,CCarouselCaption } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

import img from '../Assets/photo-1556228720-195a672e8a03.jpeg'
import img1 from '../Assets/pexels-photo-6621334.jpeg'
import img2 from '../Assets/pexels-photo-3992878.jpeg'



const Landing = () => {
  const data = [
    {
      "image": img,
      "name": "Glowing Skin Essentials",
      "paragraph": "Hydrate and nourish your skin with our top-rated skincare products."
    },
    {
      "image": img1,
      "name": "Bold & Beautiful Makeup",
      "paragraph": "Discover high-quality makeup for a flawless and radiant look."
    },
    {
      "image": img2,
      "name": "Luxurious Hair Care",
      "paragraph": "Strengthen and style your hair with our premium hair care range."
    }
  ]
  

  
  return (
    <div className="relative w-screen">
    <NavBar />
    <CCarousel controls indicators dark>
      {data.map((slide, index) => (
        <CCarouselItem key={index}>
          <CImage className="d-block w-100 max-h-screen" src={slide.image} alt={`slide ${index + 1}`} />
          <CCarouselCaption className="d-none d-md-block absolute top-[40%] text-4xl">
            <p className=''>{slide.name}</p>
            <p>{slide.paragraph}</p>
            <a href='/catagory' className='px-28 py-3 bg-[#0B74FA] no-underline text-white text-base rounded-lg'>Explore</a>
          </CCarouselCaption>
        </CCarouselItem>
      ))}
    </CCarousel>
  </div>
  )
}

export default Landing