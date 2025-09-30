//TODO
//Filtering

import React, { useState } from 'react'
import Card from '../Components/Card'
import NavBar from '../Components/NavBar'
import { BsFunnel, BsSearch } from 'react-icons/bs'
import Filter from '../Models/Filter'

const Search = () => {
   const [showFilters, setShowFilters] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [selectedRating, setSelectedRating] = useState(0);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [categories, setCategories] = useState([]);

    const products = [
        {
          "name": "Hydrating Face Cream",
          "company": "GlowCare",
          "price": 24.99,
          "rate": 4.5
        },
        {
          "name": "Natural Lip Balm",
          "company": "EcoBeauty",
          "price": 5.99,
          "rate": 4.2
        },
        {
          "name": "Revitalizing Shampoo",
          "company": "PureLocks",
          "price": 14.49,
          "rate": 4.7
        },
        {
          "name": "Herbal Body Lotion",
          "company": "Nature's Touch",
          "price": 12.99,
          "rate": 4.4
        },
        {
          "name": "Anti-Aging Serum",
          "company": "YouthGuard",
          "price": 29.99,
          "rate": 4.8
        },
        {
          "name": "Hydrating Face Cream",
          "company": "GlowCare",
          "price": 24.99,
          "rate": 4.5
        },
        {
          "name": "Natural Lip Balm",
          "company": "EcoBeauty",
          "price": 5.99,
          "rate": 4.2
        },
        {
          "name": "Revitalizing Shampoo",
          "company": "PureLocks",
          "price": 14.49,
          "rate": 4.7
        },
        {
          "name": "Herbal Body Lotion",
          "company": "Nature's Touch",
          "price": 12.99,
          "rate": 4.4
        },
        {
          "name": "Anti-Aging Serum",
          "company": "YouthGuard",
          "price": 29.99,
          "rate": 4.8
        },
        {
          "name": "Hydrating Face Cream",
          "company": "GlowCare",
          "price": 24.99,
          "rate": 4.5
        },
        {
          "name": "Natural Lip Balm",
          "company": "EcoBeauty",
          "price": 5.99,
          "rate": 4.2
        },
        {
          "name": "Revitalizing Shampoo",
          "company": "PureLocks",
          "price": 14.49,
          "rate": 4.7
        },
        {
          "name": "Herbal Body Lotion",
          "company": "Nature's Touch",
          "price": 12.99,
          "rate": 4.4
        },
        {
          "name": "Anti-Aging Serum",
          "company": "YouthGuard",
          "price": 29.99,
          "rate": 4.8
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
        <div className='w-[100%] h-20 relative'>
        <NavBar/>
        </div>
        <div className='w-[90%] h-[100px] flex justify-between items-center'>
            <h2 className='text-3xl font-thin'>Search results for: <span className='text-3xl font-normal'>Product name</span></h2>
            <div className={`w-[100%] md:w-[50%] ${hasFilters ? 'lg:w-[50%]' : 'lg:w-[50%]' }  h-14 flex md:justify-end md:items-center items-start gap-3 mb-3`}>
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
                <button className='p-2 border-2 border-[#0693be] hover:border-[#0693be90] text-[#0693be] hover:text-[#0693be90] rounded-xl transition ease-in-out delay-50'
                onClick={()=>{setPriceRange([0,100]); setSelectedCategories([]); setSelectedRating(0)}}
                >Clear Filter</button>
              )}
                              </div>
        </div>
        <div className='w-[100%] min-h-[75.2vh]  h-fit grid grid-cols-4 gap-5 items-center place-items-center'>
        {filteredProducts.map((item, index) => (
          <Card name={item.name} price={item.price} company={item.company} id={item.id} rate={item.rate}/>
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

export default Search