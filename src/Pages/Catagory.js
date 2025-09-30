//TODO
//1- json 

import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import CardCatagory from '../Components/CardCatagory';
import CardCatagoryLeft from '../Components/CardCatagoryRight';
import Background from '../Components/Background'; // Import the Background component
import img from '../Assets/haircare.jpg';
import img1 from '../Assets/skincare.jpeg';
import img2 from '../Assets/perfumes.jpeg';
import img3 from '../Assets/nails.jpeg';
import img4 from '../Assets/teeth.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import NavBar3 from '../Components/NavBar3';

const Catagory = () => {
  const navigate = useNavigate()
  const data =[
    {
      "name": "Skincare",
      "image": img1,
      "description": "Nourish and protect your skin with high-quality skincare products."
    },
    {
      "name": "Hair Care",
      "image": img,
      "description": "Find the best products to keep your hair healthy, shiny, and strong."
    },
    {
      "name": "Fragrances",
      "image": img2,
      "description": "Discover signature perfumes and fragrances to match your style."
    },
    {
      "name": "Nail Care",
      "image": img3,
      "description": "Keep your nails healthy and stylish with our premium nail care products."
    },
    {
      "name": "Teeth Health",
      "image": img4,
      "description": "Maintain a bright and healthy smile with our top-quality dental care products."
    }
  ]
  
  const [catagory, setCatagory] = useState('')

  const CatagoriesURLAPI=`http://127.0.0.1:8000/api/admin/categories`
  async function catagories(){
    console.log('ssss')
       try{
        const response = await axios.get(CatagoriesURLAPI, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*"
          }
        });
        console.log('pp',response.data.data)
        setCatagory(response.data.data)

      }catch(err){
          console.log(err)
      }
  }

  useEffect(() => {
    catagories()
  }, []);

  return (
    <div className="relative w-full min-h-screen h-fit">
      <Background /> {/* Add the Background component */}
      <div className="absolute inset-0 backdrop-blur-md z-5"></div>
      <div className="relative z-10 w-full min-h-screen h-fit bg-transparent flex items-center flex-col">
        <div className="w-[100%] h-32 relative">
          <NavBar />
        </div>
        <div className="w-[95%] min-h-[83%] h-fit flex justify-evenly items-center flex-col gap-3 mb-5">
          {data.length ? data.map((item, index) => (
            <div key={index} className={`w-[100%] flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center`}>
              {index % 2 === 0 ? (
                <CardCatagory img={item.image} name={item.name} describe={item.description} />
              ) : (
                <CardCatagoryLeft img={item.image} name={item.name} describe={item.description} />
              )}
            </div>
          )) : ''}
        </div>
      </div>
    </div>
  );
};

export default Catagory;
