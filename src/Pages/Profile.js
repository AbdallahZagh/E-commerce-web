import React, { useState } from 'react'
// import { BsPersonCircle } from "react-icons/bs";
import NavBar from '../Components/NavBar'
import man from '../Assets/man.png'
import woman from '../Assets/woman.png'
import img from '../Assets/Doctors.jpg'
import Card from '../Components/Card'



const Profile = () => {
    // const gender = 'male'
    const orders = [
      {
        "id": 1005,
        "total": 29.98,
        "price": 14.99,
        "quantity": 2,
        "date": "2023-10-15",
        "status": "Delivered",
        "product": "Hydrating Facial Cleanser"
      },
      {
        "id": 1004,
        "total": 34.00,
        "price": 34.00,
        "quantity": 1,
        "date": "2023-10-10",
        "status": "Processing",
        "product": "Vitamin C Brightening Serum"
      },
      {
        "id": 1003,
        "total": 59.98,
        "price": 29.99,
        "quantity": 2,
        "date": "2023-09-25",
        "status": "Shipped",
        "product": "Renewing Night Cream"
      },
      {
        "id": 1002,
        "total": 13.60,
        "price": 6.80,
        "quantity": 2,
        "date": "2023-09-05",
        "status": "Delivered",
        "product": "Hyaluronic Acid Serum"
      },
      {
        "id": 1001,
        "total": 39.98,
        "price": 19.99,
        "quantity": 2,
        "date": "2023-08-20",
        "status": "Delivered",
        "product": "Anthelios Sunscreen SPF 50"
      }
    ] 

      const profile = {
        name : 'Abdallah Zaghloul',
        phone: '0993856391',
        birth : '17-8-2002',
        gender: 'Male',
        email: 'f2002.a.z@gmail.com'
      }

  return (
    <div className='w-full min-h-screen h-fit bg-white flex items-center flex-col gap-3'>
      <div className='w-[100%] h-14 relative'>
        <NavBar/>
      </div>
      <div className='w-[98%] min-h-[89vh] h-fit flex justify-between items-center md:items-start flex-col md:flex-row'>
        <div className='w-[90%] md:w-[25%] h-[70vh] bg-[#d6e7fe] rounded-md drop-shadow-xl text-black shadow-[#aaaaaa]'>
            <div className='w-[100%] h-[30%] flex justify-evenly items-center flex-col  border-b-2 border-[#0960d0]'>
                <img src={profile.gender == 'Male' ? man : woman} className='h-[50%]'/>
                <h2 className=''>{profile.name}</h2>
            </div>
            <div className='w-[100%] h-[70%] flex justify-evenly items-center flex-col'>
            <div className='w-[70%] h-12 relative mt-4'>
            <input
      id="email"
      name="email"
      value={profile.email}
      type="text"
      class="w-[100%] h-10 border-2 border-[#0960d0] bg-transparent rounded-md p-2 outline-none transition-colors"
      disabled
    />
    <label
      for="email"
      class="absolute left-2 -top-6 cursor-text text-lg transition-all ">E-mail</label>
      </div>
      <div className='w-[70%] h-12 relative mt-4'>
            <input
      id="phone"
      name="phone"
      value={profile.phone}
      type="text"
      class="w-[100%] h-10 border-2 border-[#0960d0] bg-transparent rounded-md p-2 outline-none transition-colors"
      disabled
    />
    <label
      for="phone"
      class="absolute left-2 -top-6 cursor-text text-lg transition-all ">Phone number</label>
      </div>
      <div className='w-[70%] h-12 relative mt-4'>
            <input
      id="birth"
      name="birth"
      value={profile.birth}
      type="text"
      class="w-[100%] h-10 border-2 border-[#0960d0] bg-transparent rounded-md p-2 outline-none transition-colors"
      disabled
    />
    <label
      for="birth"
      class="absolute left-2 -top-6 cursor-text text-lg transition-all ">Birth Date</label>
      </div>
      <div className='w-[70%] h-12 relative mt-4'>
            <input
      id="gender"
      name="gender"
      value={profile.gender}
      type="text"
      class="w-[100%] h-10 border-2 border-[#0960d0] bg-transparent rounded-md p-2 outline-none transition-colors"
      disabled
    />
    <label
      for="gender"
      class="absolute left-2 -top-6 cursor-text text-lg transition-all ">Gender</label>
      </div>
            </div>
        </div>
        <div className='w-[90%] md:w-0.5 h-0.5 md:h-[60vh] mt-5 md:mt-10 rounded-full bg-[#0960d0]'></div>
            <div className='w-[90%] md:w-[70%] md:mt-0 mt-5'>
                <div className='w-[100%] h-fit flex justify-evenly items-center flex-col gap-4'>
                    <h2 className='w-[100%] pb-2 border-b border-[#0960d0] text-[#0B74FA] text-3xl'>Latest Orders</h2>
                    <div className="w-[100%] h-fit flex justify-evenly items-center flex-col gap-3">
                    <div className="w-[100%] flex justify-evenly items-center bg-[#F7F7F7] rounded-md py-2">
              <h2 className="text-lg font-medium">ID</h2>
            <p className="m-0 w-24 text-center">Date</p>
            <p className="m-0 w-24 text-center">Quantity</p>
            <p className="m-0 w-24 text-center">Total</p>
            {/* <div className="w-24 text-center">${(item.price * item.quantity).toFixed(2)}</div> */}
          </div>
      <div className='w-[100%] h-0.5 rounded-full bg-[#add0fd] -my-2'></div>

        {orders.map((item) => (
          <>
          <div key={item.id} className="w-[100%] flex justify-evenly items-center bg-[#F7F7F7] rounded-md py-4">
              <h2 className="text-lg font-medium">{item.id}</h2>
            <p className="m-0 w-24 text-center">{item.date}</p>
            <p className="m-0 w-24 text-center">{item.quantity}</p>
            <p className="m-0 w-24 text-center">{item.total}</p>
            {/* <div className="w-24 text-center">${(item.price * item.quantity).toFixed(2)}</div> */}
          </div>
      <div className='w-[80%] h-0.5 rounded-full bg-[#add0fd]'></div>
</>
        ))}
      </div>
      <div className='w-[100%] h-fit flex justify-evenly items-center flex-col mb-3'>
      <h2 className='w-[100%] pb-2 border-b border-[#0960d0] text-[#0B74FA] text-3xl'>Favorites</h2>
      <div className='w-[100%] min-h-[82.3vh] h-fit grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center place-items-center'>
        {orders.map((item, index) => (
          <Card/>
        ))}
        </div>
      </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Profile