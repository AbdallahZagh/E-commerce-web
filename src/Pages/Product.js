// import React, { useState, useEffect } from 'react';

// import { BsArrowLeft, BsArrowRight, BsCart3, BsStarFill, BsStarHalf, BsStar  } from "react-icons/bs";

// import img from '../Assets/still-life-care-products.jpg';
// import img1 from '../Assets/front-view-plastic-bottles-hair-dye.jpg';
// import Comment from '../Components/Comment';
// import Card from '../Components/Card';
// import NavBar from '../Components/NavBar';
// import { useParams } from 'react-router-dom';

// const Product = () => {
//   const { id } = useParams()
//   const productId = Number(id);
//   const data = [img, img1, img, img1, img];
//   const products = [
//     {
//       "id": 1,
//       "name": "Hydrating Face Cream",
//       "company": "GlowCare",
//       "price": 24.99,
//       "rate": 4.5
//     },
//     {
//       "id": 2,
//       "name": "Natural Lip Balm",
//       "company": "EcoBeauty",
//       "price": 5.99,
//       "rate": 4.2
//     },
//     {
//       "id": 3,
//         "name": "Revitalizing Shampoo",
//         "company": "PureLocks",
//         "price": 14.49,
//         "rate": 4.7
//       },
//       {
//         "id": 4,
//         "name": "Herbal Body Lotion",
//         "company": "Nature's Touch",
//         "price": 12.99,
//         "rate": 4.4
//       },
//       {
//         "id": 5,
//         "name": "Anti-Aging Serum",
//         "company": "YouthGuard",
//         "price": 29.99,
//         "rate": 4.8
//       },
//       {
//         "id": 6,
//         "name": "Hydrating Face Cream",
//         "company": "GlowCare",
//         "price": 24.99,
//         "rate": 4.5
//       },
//       {
//         "id": 7,
//         "name": "Natural Lip Balm",
//         "company": "EcoBeauty",
//         "price": 5.99,
//         "rate": 4.2
//       },
//       {
//         "id": 8,
//         "name": "Revitalizing Shampoo",
//         "company": "PureLocks",
//         "price": 14.49,
//         "rate": 4.7
//       },
//       {
//         "id": 9,
//         "name": "Herbal Body Lotion",
//         "company": "Nature's Touch",
//         "price": 12.99,
//         "rate": 4.4
//       },
//       {
//         "id": 10,
//         "name": "Anti-Aging Serum",
//         "company": "YouthGuard",
//         "price": 29.99,
//         "rate": 4.8
//       },
//       {
//         "id": 11,
//         "name": "Hydrating Face Cream",
//         "company": "GlowCare",
//         "price": 24.99,
//         "rate": 4.5
//       },
//       {
//         "id": 12,
//         "name": "Natural Lip Balm",
//         "company": "EcoBeauty",
//         "price": 5.99,
//         "rate": 4.2
//       },
//       {
//         "id": 13,
//         "name": "Revitalizing Shampoo",
//         "company": "PureLocks",
//         "price": 14.49,
//         "rate": 4.7
//       },
//       {
//         "id": 14,
//         "name": "Herbal Body Lotion",
//         "company": "Nature's Touch",
//         "price": 12.99,
//         "rate": 4.4
//       },
//       {
//         "id": 15,
//         "name": "Anti-Aging Serum",
//         "company": "YouthGuard",
//         "price": 29.99,
//         "rate": 4.8
//       }    
//     ];
//     const reviews =[
//       {
//         "id": 1,
//         "username": "JaneDoe123",
//         "review": "Absolutely loved the product! It exceeded my expectations and I highly recommend it.",
//         "rating": 5,
//         "date": "2024-11-05"
//       },
//       {
//         "id": 2,
//         "username": "JohnSmith456",
//         "review": "Good quality, but the delivery took longer than expected.",
//         "rating": 4,
//         "date": "2024-11-06"
//       },
//       {
//         "id": 3,
//       "username": "Emily_R",
//       "review": "The product is decent but not as described. The color was different from what I saw online.",
//       "rating": 3,
//       "date": "2024-11-07"
//     },
//     {
//       "id": 4,
//       "username": "Mike89",
//       "review": "Very disappointed with the purchase. The product arrived damaged.",
//       "rating": 1,
//       "date": "2024-11-08"
//     },
//     {
//       "id": 5,
//       "username": "Samantha_B",
//       "review": "Great value for money! The customer service was also very helpful.",
//       "rating": 5,
//       "date": "2024-11-09"
//     },
//     {
//       "id": 1,
//       "username": "JaneDoe123",
//       "review": "Absolutely loved the product! It exceeded my expectations and I highly recommend it.",
//       "rating": 5,
//       "date": "2024-11-05"
//     },
//     {
//       "id": 2,
//       "username": "JohnSmith456",
//       "review": "Good quality, but the delivery took longer than expected.",
//       "rating": 4,
//       "date": "2024-11-06"
//     },
//     {
//       "id": 3,
//       "username": "Emily_R",
//       "review": "The product is decent but not as described. The color was different from what I saw online.",
//       "rating": 3,
//       "date": "2024-11-07"
//     },
//     {
//       "id": 4,
//       "username": "Mike89",
//       "review": "Very disappointed with the purchase. The product arrived damaged.",
//       "rating": 1,
//       "date": "2024-11-08"
//     },
//   ]
//   const [loader, setLoader] = useState(false);
//   const [rating, setRating] = useState(0); // State to hold the selected rating
//   const [hover, setHover] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const rate = 3.5
//   const fullStars = Math.floor(rate);
//   const halfStar = rate % 1 >= 0.5;
//   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
//   const product = products.find((item) => item.id === productId);

//   console.log('mm', productId);



//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 10000);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const handlePrev = () => {
//     setIsAnimating(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
//       setIsAnimating(false);
//     }, 400); // Animation duration
//   };

//   const handleNext = () => {
//     setIsAnimating(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
//       setIsAnimating(false);
//     }, 400); // Animation duration
//   };

//   const handleClick = (value) => {
//     setRating(value);
//     console.log(`User selected rating: ${value}`);
//   };


//   if (!product) {
//     return <div className="text-center text-red-500 text-xl mt-10">Product not found</div>;
//   }

//   return (
//     <div className='w-full min-h-screen h-fit bg-white flex items-center flex-col gap-3'>
//       <div className='w-[100%] h-16 relative'>
//         <NavBar />
//       </div>
//       <div className='w-full h-96 flex justify-evenly items-center'>
//         <div className="relative w-[50%] h-[100%] flex justify-center items-center flex-col">


//           <div className={`overflow-hidden rounded-lg w-[100%] h-[78%] transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
//             <img
//               src={data[currentIndex]}
//               alt={`Product ${currentIndex + 1}`}
//               className="w-full h-[100%] object-cover object-center"
//             />
//           </div>
//           <button
//             onClick={handlePrev}
//             className="absolute h-[77.7%] w-10 left-0 top-[39%] transform -translate-y-1/2 text-[#fff] bg-[#0b73fa00] hover:bg-[#0b73fa90] rounded-tl-lg rounded-bl-lg flex justify-center items-center transition ease-in-out delay-50"
//           >
//             <BsArrowLeft size={22}/>
//           </button>
//           <button
//             onClick={handleNext}
//             className="absolute h-[77.7%] w-10 right-0 top-[39%] transform -translate-y-1/2 text-[#fff] bg-[#0b73fa00] hover:bg-[#0b73fa90] rounded-tr-lg rounded-br-lg flex justify-center items-center transition ease-in-out delay-50"
//           >
//             <BsArrowRight size={22}/>
//           </button>
//           <div className='w-[100%] h-[22%] flex justify-evenly items-center gap-[2.5%]'>
//             {data.map((thumbnail, index) => (
//               <img
//                 key={index}
//                 src={thumbnail}
//                 alt={`Thumbnail ${index + 1}`}
//                 className={`w-[18%] h-20 object-cover object-center rounded-md cursor-pointer ${index === currentIndex ? 'border-b-4 border-t-4 border-[#0b73fa]' : 'border-2 border-[#0b73fa64]'}`}
//                 onClick={() => setCurrentIndex(index)}
//               />
//             ))}
//           </div>
//         </div>
//         <div className='w-0.5 h-[90%] rounded-full bg-[#add0fd]'></div>
//       <div className='w-[48%] h-96 flex justify-evenly flex-col'>
//         <h1>Product Name</h1>
//         <div className='w-[100%] h-10 flex justify-start items-center gap-3 '>
//       <h2 className='py-0.5 px-3 rounded-3xl border-2 text-base font-normal'>Catagory</h2>
//       <h2 className='py-0.5 px-3 rounded-3xl border-2 text-base font-normal'>Company</h2>
//     </div>
//     <p className='m-0'>Lorem ipsum dolor sit amet. A doloribus consequatur est dolores quae est nihil soluta et sunt laboriosam ab aliquam impedit. Ut maxime eaque in odio fugit non magni tempore. Et esse necessitatibus sed quidem quaerat non tempora distinctio ut nihil neque. Id dolorem tenetur et porro mollitia non expedita modi ea optio dolores et omnis dolorem!</p>
//     <p className='w-[80%] h-[10%] text-xl font-semibold m-0 flex justify-start items-center gap-3'>100$ <span className='py-1 px-3 font-normal rounded-md bg-[#074da6] text-white text-base'>Save 10%</span></p>
//     <div className='w-[100%] h-20  flex justify-evenly items-end'>
//     <button className='w-[75%] h-12 bg-[#0B74FA] hover:bg-[#0b73fad6] text-white text-lg rounded-lg transition ease-in-out delay-50 flex justify-center items-center gap-2'>
//         <BsCart3/>
//         <p className='m-0'>Add to cart</p>
//     </button>
//     <div className='w-[20%] h-[100%] relative flex justify-start items-end'>
//         <input type='text' id='quanity' name='quanity' className='w-[100%] h-12 border-2 border-[#0B74FA] rounded-lg outline-none p-2'/>
//         <label htmlFor='quanity' className='absolute top-2 left-0'>Quanity</label>
//     </div>
//       </div>
//       </div>
//       </div>
//       <div className='w-[80%] h-0.5 rounded-full bg-[#add0fd]'></div>
//       <div className='w-[100%] h-[750px] flex justify-between items-center flex-col'>
//         <div className='w-[90%] h-[10%] flex justify-between items-center'>
//             <h2 className='text-3xl border-b border-[#0b74fa] px-0.5'>Reviews</h2>
//             <div className="flex justify-start items-center">
//                 <p className='m-0 font-thin text-lg'>{rate}<span className='font-normal mr-3'>/5</span></p>
//       {[...Array(fullStars)].map((_, index) => (
//         <BsStarFill key={index} className="text-yellow-500" size={20} />
//       ))}
//       {halfStar && <BsStarHalf className="text-yellow-500" size={20}/>}
//       {[...Array(emptyStars)].map((_, index) => (
//         <BsStar key={index + fullStars + (halfStar ? 1 : 0)} className="text-gray-300" size={20}/>
//       ))}
//     </div>
//         </div>
//         <div className='w-[100%] h-[57%] grid grid-cols-2 place-items-center overflow-y-auto -mt-20 pb-3 scrollbar-thin scrollbar-track-[#d4d4d4] scrollbar-thumb-[#074da6]'>
//         {reviews.map((item, index) => (
//           <Comment name={item.username} review={item.review} date={item.date} rate={item.rating} />
//         ))}
//         </div>

//         <div className='w-[80%] h-0.5 rounded-full bg-[#add0fd]'></div>

//         <div className='w-[90%] h-[20%] relative flex justify-start items-center gap-3'>
//         <label htmlFor="review" className="text-xl font-semibold absolute top-0">
//         Review our product
//   </label>
//   <textarea
//   maxLength={250}
//     name="review"
//     id="review"
//     placeholder='Write your review...'
//     className="w-[45%] h-12 placeholder:text-[#474747] rounded-xl bg-[#F7F7F7] p-2 outline-none resize-none overflow-hidden mt-2"
//     onInput={(e) => {
//       e.target.style.height = '48px'; // Reset height to recalculate
//       e.target.style.height = `${e.target.scrollHeight}px`; // Adjust height based on content
//     }}
//   />
//   <button className='w-28 h-12 mt-2 rounded-xl font-semibold text-white bg-[#0B74FA] hover:bg-[#0b73fad6] transition ease-in-out delay-50'>
//   {loader ? (
//                 <div class="w-full gap-x-2 flex justify-center items-center">
//                   <div class="w-3 bg-[#dbd5e9] animate-pulse h-3 rounded-full"></div>
//                   <div class="w-3 animate-pulse h-3 bg-[#dbd5e9] rounded-full"></div>
//                   <div class="w-3 h-3 animate-pulse bg-[#dbd5e9] rounded-full"></div>
//                 </div>
//               ) : (
//                 "Submit"
//               )}
//     </button>

// <div className="flex flex-col items-center space-y-4 absolute top-0 right-0">
//       <div className="flex space-x-1">
//         {[...Array(5)].map((_, index) => {
//           const starValue = index + 1;
//           return (
//             <button
//               key={index}   
//               type="button"
//               onClick={() => handleClick(starValue)}
//               onMouseEnter={() => setHover(starValue)}
//               onMouseLeave={() => setHover(null)}
//               className="focus:outline-none"
//             >
//               {starValue <= (hover || rating) ? (
//                 <BsStarFill size={24} color="#eab308" /> // Filled star for selected/hovered state
//               ) : (
//                 <BsStar size={24} color="#D1D5DB" /> // Outline star for unselected state
//               )}
//             </button>
//           );
//         })}
//       </div>
//     </div>

//         </div>
//       </div>
//       <div className='w-[80%] h-0.5 rounded-full bg-[#add0fd]'></div>
//       <div className='w-[90%] min-h-[150px] h-fit flex justify-between items-start flex-col'>
//       <h2 className='text-3xl border-b border-[#0b74fa] px-1'>Recommended products</h2>
//       <div className={`w-[100%] h-fit ${reviews ? 'grid grid-cols-4 place-items-center gap-3 my-3' : 'block'}`}>
//       <>
//   {products && products.length > 0 ? (
//     products.map((item, index) => (
//       <Card name={item.name} price={item.price} company={item.company} id={item.id} rate={item.rate}/>
//     ))
//   ) : (
//     <p className='text-center text-2xl text-[#074da6] font-semibold'>No Recommendations</p>
//   )}
// </>

//       </div>
//       </div>
//     </div>
//   );
// };

// export default Product;


import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BsArrowLeft, BsArrowRight, BsCart3, BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import Comment from '../Components/Comment';
import Card from '../Components/Card';
import NavBar from '../Components/NavBar';
import { addToCart } from '../redux/actions';
import img from '../Assets/porduct1_1.jpg';
import img1 from '../Assets/porduct1_2.jpg';
import img2 from '../Assets/porduct1_3.jpg';
import img3 from '../Assets/porduct1_4.jpg';
import img4 from '../Assets/porduct1_5.jpg';
import img16 from '../Assets/porduct1_5.jpg'
import img11 from '../Assets/products2.jpg'
import img12 from '../Assets/product3.jpg'
import img13 from '../Assets/product4.jpg'
import img14 from '../Assets/product5.jpg'
import img15 from '../Assets/product6.jpg'

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productId = Number(id);
  const [quantity, setQuantity] = useState();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const products = {
    "product": {
      "id": 1,
      "name": "Hydrating Facial Cleanser",
      "company": "CeraVe",
      "price": 14.99,
      "rate": 4.5,
      "image": [img, img1, img2, img3, img4],
      "description": "A gentle, non-foaming cleanser with hyaluronic acid and ceramides that removes impurities while maintaining the skin's natural barrier. Ideal for normal to dry skin types. Fragrance-free and non-comedogenic."
    },
    "reviews": [
      {
        "id": 101,
        "username": "Sarah_J",
        "review": "Left my skin feeling clean but not stripped! Perfect for my sensitive skin.",
        "rating": 5,
        "date": "2023-08-15"
      },
      {
        "id": 102,
        "username": "Adam_Sam",
        "review": "Good basic cleanser, though I wish it came in a bigger size.",
        "rating": 4,
        "date": "2023-09-01"
      },
      {
        "id": 103,
        "username": "DermApproved",
        "review": "My dermatologist recommended this - works great with my skincare routine.",
        "rating": 4.5,
        "date": "2023-09-12"
      }
    ],
    "recommendedProducts": [
      {
        "id": 1,
        "name": "Hydrating Facial Cleanser",
        "company": "CeraVe",
        "price": 14.99,
        "rate": 4.5,
        "image": img16
      },
      {
        "id": 2,
        "name": "Hyaluronic Acid Serum",
        "company": "The Ordinary",
        "price": 6.80,
        "rate": 4.7,
        "image": img11
      },
      {
        "id": 3,
        "name": "Night Cream",
        "company": "Olay",
        "price": 29.99,
        "rate": 4.3,
        "image": img12
      },
      {
        "id": 4,
        "name": "Ultra-Light Moisturizing Lotion",
        "company": "Neutrogena",
        "price": 12.49,
        "rate": 4.0,
        "image": img13
      },
      {
        "id": 5,
        "name": "Vitamin C Brightening Serum",
        "company": "Paula's Choice",
        "price": 34.00,
        "rate": 4.8,
        "image": img14
      },
      {
        "id": 6,
        "name": "Anthelios Sunscreen SPF 50",
        "company": "La Roche-Posay",
        "price": 19.99,
        "rate": 3.5,
        "image": img15
      }
    ]
  }
  // const product = products.product.find(p => p.id === productId);
  // const recommendedProducts = products.filter(p => p.id !== productId);

  console.log('dd',products.recommendedProducts[1].image)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(prev => (prev === 0 ? products.product.image.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 400);
  };

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(prev => (prev === products.product.image.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 400);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({
      ...products.product,
      image: products.product.image[0]
    }, quantity));
  };

  const handleRatingClick = (value) => {
    setRating(value);
  };

  if (!products.product) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <h2 className="text-2xl text-red-500">Product not found</h2>
      </div>
    );
  }

  // Rating calculation
  const fullStars = Math.floor(products.product.rate);
  const halfStar = products.product.rate % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className='w-full min-h-screen h-fit bg-white flex items-center flex-col gap-3'>
      <div className='w-[100%] h-16 relative'>
        <NavBar />
      </div>

      <div className='w-full h-fit md:h-96 flex justify-evenly items-center flex-col md:flex-row'>
        {/* Image Carousel */}
         <div className="relative w-[100%] md:w-[48%] h-[50%] md:h-[100%] flex justify-center items-center flex-col -mt-4 md:mt-0">


           <div className={`overflow-hidden rounded-lg w-[100%] h-fit transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
             <img
              src={products.product.image[currentIndex]}
              alt={`Product ${currentIndex + 1}`}
              className="w-full h-[100%] object-contain object-center"
            />
          </div>
          <button
            onClick={handlePrev}
            className="absolute h-[77.7%] w-10 left-0 top-[39%] transform -translate-y-1/2 text-[#fff] bg-[#0b73fa00] hover:bg-[#0b73fa90] rounded-tl-lg rounded-bl-lg flex justify-center items-center transition ease-in-out delay-50"
          >
            <BsArrowLeft size={22}/>
          </button>
          <button
            onClick={handleNext}
            className="absolute h-[77.7%] w-10 right-0 top-[39%] transform -translate-y-1/2 text-[#fff] bg-[#0b73fa00] hover:bg-[#0b73fa90] rounded-tr-lg rounded-br-lg flex justify-center items-center transition ease-in-out delay-50"
          >
            <BsArrowRight size={22}/>
          </button>
          <div className='w-[100%] h-[22%] flex justify-evenly items-center gap-[2.5%]'>
            {products.product.image.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className={`w-[18%] h-20 object-cover object-center rounded-md cursor-pointer ${index === currentIndex ? 'border-b-4 border-t-4 border-[#0b73fa]' : 'border-2 border-[#0b73fa64]'}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
         <div className='w-[75%] md:w-0.5 h-0.5 md:h-[90%] rounded-full bg-[#add0fd] my-3'></div>

        {/* Product Details */}
        <div className='w-[95%] md:w-[48%] h-[30%] md:h-96 flex flex-col justify-evenly'>
          <h1 className="text-3xl font-semibold">{products.product.name}</h1>
          <div className='flex gap-3'>
            <span className='px-3 py-1 text-base border-2 rounded-3xl'>{products.product.category}</span>
            <span className='px-3 py-1 text-base border-2 rounded-3xl'>{products.product.company}</span>
          </div>
          <p className='text-gray-600 text-ellipsis w-[100%]'>{products.product.description}</p>
          <div className='flex items-center gap-2'>
            <span className='text-2xl font-bold'>${products.product.price.toFixed(2)}</span>
            <div className='flex text-yellow-400'>
              {[...Array(fullStars)].map((_, i) => <BsStarFill key={i} />)}
              {halfStar && <BsStarHalf />}
              {[...Array(emptyStars)].map((_, i) => <BsStar key={i} />)}
            </div>
          </div>

          {/* Add to Cart Section */}
          <div className='flex gap-4 items-end'>
            <div className='flex flex-col w-24'>
              <label className='text-sm text-gray-500'>Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className='w-full h-12 p-2 border-2 rounded-lg border-[#0B74FA] '
                min="1"
              />
            </div>
            <button
              onClick={handleAddToCart}
              disabled = {!quantity}
              className='w-64 h-12 bg-[#0B74FA] hover:bg-[#0b73fad6] text-white rounded-lg flex items-center justify-center gap-2 transition-colors disabled:cursor-not-allowed'
            >
              <BsCart3 size={20} />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className='w-[90%] my-8'>
        <h2 className='pb-2 text-2xl font-bold border-b-2 border-[#0b74fa]'>Customer Reviews</h2>
        <div className='grid md:grid-cols-2 gap-4 mt-4'>
          {products.reviews.map((review) => (
            <Comment
              key={review.id}
              name={review.username}
              review={review.review}
              date={review.date}
              rate={review.rating}
            />
          ))}
        </div>

        {/* Review Form */}
        <div className='p-4 mt-8 bg-gray-50 rounded-lg'>
          <h3 className='mb-4 text-xl font-semibold'>Write a Review</h3>
          <div className='flex gap-4 mb-4'>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRatingClick(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(null)}
                className={`text-2xl ${
                  star <= (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                {star <= (hoverRating || rating) ? <BsStarFill /> : <BsStar />}
              </button>
            ))}
          </div>
          <textarea
            placeholder='Share your experience...'
            className='w-full h-32 p-3 mb-4 border rounded-lg'
          />
          <button className='px-6 py-2 text-white bg-[#0B74FA] rounded-lg hover:bg-[#0b73fad6]'>
            Submit Review
          </button>
        </div>
      </div>

      {/* Recommended Products */}
      <div className='w-[90%] my-8'>
        <h2 className='pb-2 text-2xl font-bold border-b-2 border-[#0b74fa]'>Recommended Products</h2>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center gap-4 mt-4'>
          {products.recommendedProducts.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              company={product.company}
              rate={product.rate}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;