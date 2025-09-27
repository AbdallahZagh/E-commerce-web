import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BsSearch, BsGrid3X2GapFill, BsList, BsFunnel } from "react-icons/bs";
import SideBar from '../Components/Sidebar'
import Delete from '../Models/Delete';
import AddProduct from '../Models/Products/AddProduct';
import Table from '../Components/Products/Table';
import Card from '../Components/Products/Card';
import img1 from '../Assets/products2.jpg'
import img2 from '../Assets/product3.jpg'
import img3 from '../Assets/product4.jpg'
import img4 from '../Assets/product5.jpg'
import img5 from '../Assets/product6.jpg'

import img from '../Assets/porduct1_5.jpg'
import img14 from '../Assets/porduct1_1.jpg';
import img11 from '../Assets/porduct1_2.jpg';
import img12 from '../Assets/porduct1_3.jpg';
import img13 from '../Assets/porduct1_4.jpg';
import Filter from '../Models/Products/Filter';
import axios from 'axios'; 

const Products = () => {
    const [view, setView] = useState(false) 
    const [delet, setDelet] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalMode, setModalMode] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([
      {
        "id": 1,
        "name": "Hydrating Facial Cleanser",
        "category": "Skincare",
        "description": "Gentle daily cleanser with hyaluronic acid and ceramides for all skin types. Removes impurities without stripping moisture.",
        "price": 14.99,
        "stock": 85,
        "supplier": "CeraVe",
        "expiryDate": "2025-06-01",
        "rate": 4.5,
        "image": [img, img11, img12, img13, img14]
      },
      {
        "id": 2,
        "name": "Hyaluronic Acid Serum",
        "category": "Skincare",
        "description": "Lightweight hydrating serum with 2% hyaluronic acid complex for intense moisture retention.",
        "price": 6.80,
        "stock": 120,
        "supplier": "The Ordinary",
        "expiryDate": "2026-03-01",
        "rate": 4.7,
        "image": [img1]
      },
      {
        "id": 3,
        "name": "Renewing Night Cream",
        "category": "Skincare",
        "description": "Anti-aging night cream with retinol complex and peptides for overnight skin renewal.",
        "price": 29.99,
        "stock": 45,
        "supplier": "Olay",
        "expiryDate": "2024-12-01",
        "rate": 4.3,
        "image": [img2]
      },
      {
        "id": 4,
        "name": "Ultra-Light Moisturizing Lotion",
        "category": "Skincare",
        "description": "Oil-free moisturizer with SPF 30 protection, ideal for combination and oily skin types.",
        "price": 12.49,
        "stock": 200,
        "supplier": "Neutrogena",
        "expiryDate": "2025-09-01",
        "rate": 4.0,
        "image": [img3]
      },
      {
        "id": 5,
        "name": "Vitamin C Brightening Serum",
        "category": "Skincare",
        "description": "15% vitamin C serum with ferulic acid for brightening and antioxidant protection.",
        "price": 34.00,
        "stock": 65,
        "supplier": "Paula's Choice",
        "expiryDate": "2024-11-01",
        "rate": 4.8,
        "image": [img4]
      },
      {
        "id": 6,
        "name": "Anthelios Sunscreen SPF 50",
        "category": "Skincare",
        "description": "Matte-finish mineral sunscreen with broad spectrum protection, suitable for sensitive skin.",
        "price": 19.99,
        "stock": 150,
        "supplier": "La Roche-Posay",
        "expiryDate": "2026-01-01",
        "rate": 4.9,
        "image": [img5]
      }
    ]
    //     {
    //       "id": "PHAR-010",
    //       "name": "Blood Pressure Monitor",
    //       "category": "Medical Equipment",
    //       "description": "Automatic upper arm blood pressure cuff with digital display",
    //       "price": 49.95,
    //       "stock": 25,
    //       "supplier": "CardioCheck",
    //       "sku": "BP-MONITOR-A1",
    //       "status": "low-stock",
    //       "expiryDate": "2027-03-31",
    //       "rate": 3
    //     }
    //   ]
    // }
        );


        const handleSave = (productData) => {
          if (modalMode === 'add') {
            setProducts(prev => ({
              products: [...prev, productData]
            }));
          } else {
            setProducts(prev => ({
              products: prev.map(p => p.id === productData.id ? productData : p)
            }));
          }
          setModalMode(null);
        };

        const filteredProducts = products.filter(product => {
          const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
          const matchesRating = product.rate >= selectedRating;
          const matchesCategory = selectedCategories.length === 0 || 
            selectedCategories.includes(product.category);
          
          return matchesPrice && matchesRating && matchesCategory;
        });

        const DeleteURlAPI = `http://127.0.0.1:8000/api/products/1`;

  async function delete_product() {
    try {
      const response = await axios.delete(DeleteURlAPI,{
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "multipart/form-data"
        }
      });
      console.log('pp',response.data)
      // localStorage.setItem('token', response.data.data.token);
    } catch (err) {
      console.error(err);
    } finally {
      setDelet(false)
    }
  }

        const hasFilters = 
  priceRange[0] !== 0 || 
  priceRange[1] !== 100 || 
  selectedRating > 0 || 
  selectedCategories.length > 0;

    return (

      <div className='w-full h-fit flex justify-between items-center flex-col md:flex-row'>
          <SideBar/>
          <div className='w-[95%] min-h-screen h-fit flex justify-evenly items-center flex-col my-5 md:my-0'>
              <h1 className='w-[90%] pb-2 border-b-2 border-[#0693be] text-[#0693be] text-4xl font-semibold mb-3 md:mb-0'>Products</h1>
              <div className='w-[90%] h-32 flex justify-between md:items-center items-start flex-col md:flex-row gap-3 md:gap-0 mb-16 md:mb-0'>
                  <div className={`w-[100%] md:w-[50%] ${hasFilters ? 'lg:w-[40%]' : 'lg:w-[30%]' }  h-14 flex md:justify-evenly md:items-center items-start`}>
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
                  <div className='w-96 h-28 flex justify-evenly md:items-end items-start flex-col gap-3 md:gap-0'>
                    <div className='w-[100%] h-12 flex justify-evenly items-center'>
                  <button className='w-[35%] h-12 bg-[#0693be] hover:bg-[#0693be90] transition ease-in-out delay-50 text-white text-lg rounded-xl' onClick={() => setModalMode('add')}>Add product</button>
                  <Link to={'/inventory'} className='w-[60%] h-12 text-[#0693be] hover:text-[#0693be] bg-transparent hover:bg-[#edf3f6] border-2 border-[#0693be] hover:border-[#0693be] transition ease-in-out delay-50 text-lg rounded-xl flex justify-center items-center'>Add Restock request</Link>
                  </div>
                  <div className='w-24 h-12 border-2 border-[#0693be5c] rounded-full md:flex items-center hidden'>
         <div className={`${!view ? 'bg-[#0693be] text-white' : 'bg-transparent'} w-14 h-12 flex justify-center items-center rounded-full cursor-pointer`} onClick={()=>setView(false)}>
         <BsGrid3X2GapFill/>
         </div>
         <div className={`${view ? 'bg-[#0693be] text-white ' : 'bg-transparent'} w-14 h-12 flex justify-center items-center rounded-full cursor-pointer`} onClick={()=>setView(true)}>
        <BsList/>
         </div>
      </div>
                  </div>
              </div>
              <div className='w-[90%] min-h-[500px] h-fit mb-3'>
             {view ? <Table products={filteredProducts} setModalMode={setModalMode} setDelet={setDelet} setSelectedProduct={setSelectedProduct}/> : 
             <div className='w-full h-fit grid lg:grid-cols-4 md:grid-cols-2 place-items-center'>
             {/* {products.products.sort((a, b) => b.id - a.id).map((employee) => (
                <Card product={employee} setDelet={setDelet} setModalMode={setModalMode} setSelectedProduct={setSelectedProduct} imageUrl={img}/>
                    ))} */}
                    {filteredProducts.sort((a, b) => b.id - a.id).map((employee) => (
    <Card 
      product={employee} 
      setDelet={setDelet} 
      setModalMode={setModalMode} 
      setSelectedProduct={setSelectedProduct} 
    />))}
                    </div>}
              </div>
          </div>
          <AddProduct 
        mode={modalMode}
        product={selectedProduct}
        id={selectedProduct?.id}
        onClose={() => {
          setModalMode(null);
          setSelectedProduct(null);
        }}
        onSave={handleSave}
        visible={modalMode}
        setDelet={setDelet}
      />
      <Delete 
        onClose={() => setDelet(false)} 
        visible={delet} 
        onConfirm={delete_product}
      />
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