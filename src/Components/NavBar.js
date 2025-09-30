// //TODO 
// //1- Fixing Hover
// //2- search Functionality
// //3- Add Cart Button (DONE)
// //4- Notifications Button
  
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { BsSearch, BsPersonFill, BsArrowBarLeft, BsCart3 } from "react-icons/bs";
// import { Tooltip } from 'react-tooltip'
// import 'react-tooltip/dist/react-tooltip.css'
// import axios from "axios";

// const NavBar = () => {
//   const token = localStorage.getItem('token');
//   const navigate = useNavigate()

//   const LogoutURLAPI=`http://127.0.0.1:8000/api/user/logout`
//   async function logout(){
//     localStorage.removeItem('token')
//     console.log('ssss')
//        try{
//         const response = await axios.get(LogoutURLAPI, {
//           headers: {
//             "Authorization": `Bearer ${localStorage.getItem('token')}`,
//             "Content-Type": "multipart/form-data",
//             "Access-Control-Allow-Origin": "*"
//           }
//         });
//         navigate('/login')

//       }catch(err){
//           console.log(err)
//       }
//   }

//   return (
//     <div className="w-full h-16 bg-[#0B74FA] text-white flex justify-evenly items-center absolute z-50">
//       <h1 className="text-4xl font-thin">Elegance Hub</h1>
//       <div className="w-[35%] h-16 flex justify-center items-center relative">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="w-[100%] h-10 p-2 rounded-lg"
//         />
//         <Link
//           to="/search"
//           className="cursor-pointer w-14 h-10 rounded-lg text-lg bg-[#F7B217] text-white hover:bg-[#f7b417bd] transition ease-in-out delay-50 flex justify-center items-center absolute right-0"
//         >
//           <BsSearch />
//         </Link>
//       </div>
//       <div className="w-[30%] h-10  flex justify-center items-center gap-4">
//         {token ? (
//           <>
//           <Link
//             to="/profile"
//             className="w-[50%] h-[100%] rounded-xl bg-[#ffffff7d] hover:bg-[#ffffff99] text-white transition ease-in-out delay-50 px-2.5 flex justify-between items-center no-underline"
//           >
//             <BsPersonFill size={24} />
//             <p className="mt-3">Abdallah Zaghloul</p>
//           </Link>
//           <Link
//           data-tooltip-id="cart"
//           data-tooltip-content="Cart"
//           data-tooltip-place="bottom" 
//           to='/cart'
//            className='cursor-pointer no-underline w-10 h-10  rounded-full flex justify-center items-center bg-[#ffffff7d] hover:bg-[#ffffff99] text-white transition ease-in-out delay-50'>
//           <BsCart3 size={23}/>
//            </Link>
//           <Link
//           data-tooltip-id="logout"
//           data-tooltip-content="Logout"
//           data-tooltip-place="bottom" 
//            onClick={logout}
//            className='cursor-pointer no-underline w-10 h-10  rounded-full flex justify-center items-center bg-[#ffffff7d] hover:bg-[#ffffff99] text-white transition ease-in-out delay-50'>
//           <BsArrowBarLeft size={23}/>
//            </Link>
           
//           </>
//         ) : (
//           <>
//             <Link to='/login' className="w-[30%] h-[100%] flex justify-center items-center no-underline text-white border border-white hover:bg-[#ffffff52] transition ease-in-out delay-50 rounded-xl">
//               Login
//             </Link>
//             <Link to='/signup' className="w-[30%] h-[100%] flex justify-center items-center no-underline text-white text-[#0B74FA] hover:bg-[#ffffff4e] transition ease-in-out delay-50 bg-white rounded-xl">
//               Signup
//             </Link>
//           </>
//         )}
//       </div>
//       <Tooltip id="logout" 
//     style={{ backgroundColor: "#338bfa", color: "#ffffff", borderRadius: '8px' }} opacity={1}/>
//     <Tooltip id="cart" 
//     style={{ backgroundColor: "#338bfa", color: "#ffffff", borderRadius: '8px' }} opacity={1}/>
//     </div>
//   );
// };

// export default NavBar;


import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch, BsPersonFill, BsArrowBarLeft, BsCart3 } from "react-icons/bs";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import axios from "axios";
import { useSelector } from "react-redux";

const NavBar = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cartItems);
  const cartQuantity = cartItems.reduce((sum, item) => sum + Number(item.quantity), 0);

  const LogoutURLAPI = `http://127.0.0.1:8000/api/user/logout`;
  
  async function logout() {
    localStorage.removeItem('token');
    navigate('/login');
    try {
      const response = await axios.get(LogoutURLAPI, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*"
        }
      });
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="w-full h-16 bg-[#0B74FA] text-white flex justify-evenly items-center absolute z-50">
      <h1 className="text-2xl md:text-4xl font-thin md:w-[60%] w-[40%] cursor-pointer" onClick={()=>navigate('/catagory')}>E-commerce</h1>
      
        {/* <div className="w-[35%] h-16 flex justify-center items-center relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-[100%] h-10 p-2 rounded-lg"
          />
          <Link 
            to="/search"
            className="cursor-pointer w-14 h-10 rounded-lg text-lg bg-[#F7B217] text-white hover:bg-[#f7b417bd] transition ease-in-out delay-50 flex justify-center items-center absolute right-0"
          >
            <BsSearch />
          </Link>
        </div> */}

      <div className="md:w-[30%] w-[50%] h-10 flex justify-center items-center gap-4">
        {!token ? (
          <>
            <Link
              to="/profile"
              className="md:w-[75%] lg:w-[60%] w-10 h-10 rounded-full md:h-[100%] text-lg lg:text-xl md:rounded-xl bg-[#ffffff7d] hover:bg-[#ffffff99] text-white transition ease-in-out delay-50 px-2.5 flex justify-center gap-2 lg:gap-0 lg:justify-evenly items-center no-underline"
            >
              <BsPersonFill />
              <p className="mt-3 hidden md:block lg:text-base md:text-sm">Abdallah Zaghloul</p>
            </Link>

            <Link
              data-tooltip-id="cart"
              data-tooltip-content="Cart"
              data-tooltip-place="bottom" 
              to='/cart'
              className="relative cursor-pointer no-underline w-10 h-10 rounded-full flex justify-center items-center bg-[#ffffff7d] hover:bg-[#ffffff99] text-white transition ease-in-out delay-50"
            >
              <BsCart3 size={23}/>
              {cartQuantity > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-xs">
                  {cartQuantity}
                </div>
              )}
            </Link>

            <Link
              data-tooltip-id="logout"
              data-tooltip-content="Logout"
              data-tooltip-place="bottom" 
              onClick={logout}
              className='cursor-pointer no-underline w-10 h-10 rounded-full flex justify-center items-center bg-[#ffffff7d] hover:bg-[#ffffff99] text-white transition ease-in-out delay-50'
            >
              <BsArrowBarLeft size={23}/>
            </Link>
          </>
        ) : (
          <>
            <Link 
              to='/login' 
              className="md:w-[30%] px-3 h-[100%] flex justify-center items-center no-underline text-white border border-white hover:bg-[#ffffff52] transition ease-in-out delay-50 rounded-xl"
            >
              Login
            </Link>
            <Link 
              to='/signup' 
              className="md:w-[30%] px-3 h-[100%] flex justify-center items-center no-underline text-[#0B74FA] hover:bg-[#ffffff4e] transition ease-in-out delay-50 bg-white rounded-xl"
            >
              Signup
            </Link>
          </>
        )}
      </div>

      <Tooltip 
        id="logout" 
        style={{ backgroundColor: "#338bfa", color: "#ffffff", borderRadius: '8px' }} 
        opacity={1}
      />
      <Tooltip 
        id="cart" 
        style={{ backgroundColor: "#338bfa", color: "#ffffff", borderRadius: '8px' }} 
        opacity={1}
      />
    </div>
  );
};

export default NavBar;