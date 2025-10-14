import React from 'react';
import NavBar from '../Components/NavBar';
import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

import img from '../Assets/photo-1556228720-195a672e8a03.jpeg';
import img1 from '../Assets/pexels-photo-6621334.jpeg';
import img2 from '../Assets/pexels-photo-3992878.jpeg';

const Landing = () => {
  const data = [
    {
      image: img,
      name: 'Glowing Skin Essentials',
      paragraph: 'Hydrate and nourish your skin with our top-rated skincare products.',
    },
    {
      image: img1,
      name: 'Bold & Beautiful Makeup',
      paragraph: 'Discover high-quality makeup for a flawless and radiant look.',
    },
    {
      image: img2,
      name: 'Luxurious Hair Care',
      paragraph: 'Strengthen and style your hair with our premium hair care range.',
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <NavBar />

      <CCarousel controls indicators dark>
        {data.map((slide, index) => (
          <CCarouselItem key={index}>
            {/* Image */}
            <CImage
              className="d-block w-full h-screen object-cover"
              src={slide.image}
              alt={`slide ${index + 1}`}
            />

            {/* Caption */}
            <CCarouselCaption
              className="
                absolute 
                inset-0 
                flex flex-col justify-center items-center
                text-center 
                px-4 sm:px-6 md:px-8
              "
            >
              <h2
                className="
                  text-white 
                  font-bold 
                  drop-shadow-lg
                  text-2xl sm:text-3xl md:text-5xl lg:text-6xl 
                  mb-4
                "
              >
                {slide.name}
              </h2>

              <p
                className="
                  text-gray-100 
                  text-sm sm:text-base md:text-lg lg:text-xl
                  mb-6 max-w-xl
                "
              >
                {slide.paragraph}
              </p>

              <a
                href="/catagory"
                className="
                  px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-3 
                  bg-[#0B74FA] hover:bg-[#095ed6] 
                  text-white 
                  text-sm sm:text-base md:text-lg 
                  rounded-lg 
                  transition-all duration-300 
                  no-underline
                "
              >
                Explore
              </a>
            </CCarouselCaption>
          </CCarouselItem>
        ))}
      </CCarousel>
    </div>
  );
};

export default Landing;
