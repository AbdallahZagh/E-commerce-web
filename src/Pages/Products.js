//TODO
//2- Navigate to specific product (DONE)

import React, { useState } from 'react'
import Card from '../Components/Card'
import NavBar from '../Components/NavBar'
import { useParams } from 'react-router-dom'
import Filter from '../Models/Filter'
import { BsFunnel, BsSearch } from 'react-icons/bs'
import img from '../Assets/porduct1_5.jpg'
import img1 from '../Assets/products2.jpg'
import img2 from '../Assets/product3.jpg'
import img3 from '../Assets/product4.jpg'
import img4 from '../Assets/product5.jpg'
import img5 from '../Assets/product6.jpg'



const Products = () => {
  const { name } = useParams()
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);

  const products =[
  {
    "id": 1,
    "name": "Hydrating Facial Cleanser",
    "company": "CeraVe",
    "price": 14.99,
    "rate": 4.5,
    "image": img
  },
  {
    "id": 2,
    "name": "Hyaluronic Acid Serum",
    "company": "The Ordinary",
    "price": 6.80,
    "rate": 4.7,
    "image": img1
  },
  {
    "id": 3,
    "name": "Night Cream",
    "company": "Olay",
    "price": 29.99,
    "rate": 4.3,
    "image": img2
  },
  {
    "id": 4,
    "name": "Ultra-Light Moisturizing Lotion",
    "company": "Neutrogena",
    "price": 12.49,
    "rate": 4.0,
    "image": img3
  },
  {
    "id": 5,
    "name": "Vitamin C Brightening Serum",
    "company": "Paula's Choice",
    "price": 34.00,
    "rate": 4.8,
    "image": img4
  },
  {
    "id": 6,
    "name": "Anthelios Sunscreen SPF 50",
    "company": "La Roche-Posay",
    "price": 19.99,
    "rate": 3.5,
    "image": img5
  }
]

const filteredProducts = products.filter(product => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesRating = product.rate >= selectedRating;
    const matchesCategory = selectedCategories.length === 0 || 
      selectedCategories.includes(product.category);
    
    return matchesPrice && matchesRating && matchesCategory;
  });


const hasFilters = 
  priceRange[0] !== 0 || 
  priceRange[1] !== 100 || 
  selectedRating > 0 || 
  selectedCategories.length > 0;

  
  return (
    <div className=' w-full min-h-screen h-fit bg-white flex items-center flex-col'>
        <div className='w-[100%] h-32 relative'>
        <NavBar/>
        </div>
        <div className={` ${hasFilters ? 'w-[95%]' : 'w-[95%]' }  h-14 flex md:justify-start md:items-center items-start gap-3 mb-3`}>
                    <input type='text' placeholder='Search...' className='w-[50%] md:w-72 h-12 outline-none px-2 rounded-xl border-2 border-[#0693be]'/>
                      <button className='w-12 h-12  bg-[#0693be] hover:bg-[#0693be90] transition ease-in-out delay-50 text-white rounded-full flex justify-center items-center'>
                          <BsSearch size={20}/>
                      </button>
                      <button 
      className='relative w-12 h-12 bg-[#0693be] hover:bg-[#0693be90] transition ease-in-out delay-50 text-white rounded-full flex justify-center items-center'
      onClick={() => setShowFilters(true)}
    >
      <BsFunnel  size={20}/>
      {hasFilters && (
    <div className="absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
  )}
    </button>
    {hasFilters && (
    <button className='w-16 h-12 sm:w-24 text-xs sm:text-base border-2 border-[#0693be] hover:border-[#0693be90] text-[#0693be] hover:text-[#0693be90] rounded-xl transition ease-in-out delay-50'
    onClick={()=>{setPriceRange([0,100]); setSelectedCategories([]); setSelectedRating(0)}}
    >Clear Filter</button>
  )}
                  </div>
        <div className='w-[100%] min-h-[82.3vh] h-fit grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center place-items-center'>
        {filteredProducts.map((item, index) => (
          <Card id={item.id} name={item.name} price={item.price} company={item.company} rate={item.rate} product={item} img={item.image}/>
        ))}
        </div>
        <Filter
    visible={showFilters}
    onClose={() => setShowFilters(false)}
    priceRange={priceRange}
    setPriceRange={setPriceRange}
    selectedRating={selectedRating}
    setSelectedRating={setSelectedRating}
    categories={categories}
    selectedCategories={selectedCategories}
    setSelectedCategories={setSelectedCategories}
  />
    </div> 
  )
}

export default Products