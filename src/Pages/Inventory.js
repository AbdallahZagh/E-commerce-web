import React, {useEffect, useState} from 'react'
import SideBar from '../Components/Sidebar';
import { BsBoxSeam, BsExclamationTriangle, BsSearch } from 'react-icons/bs';
import RestockComponent from '../Components/Inventory/RestockComponent';
import TransactionHistory from '../Components/Inventory/TransactionHistory';

const Inventory = () => {
  //  const restock = {
  //   "restockAlerts": [
  //     {
  //       "productId": "PHAR-001",
  //       "productName": "Paracetamol 500mg",
  //       "currentStock": 45,
  //       "minStock": 100,
  //       "daysSinceRestock": 15,
  //       "supplier": "MediCare Suppliers",
  //       "lastOrderDate": "2023-10-01",
  //       "priority": "high"
  //     },
  //     {
  //       "productId": "PHAR-002",
  //       "productName": "Ibuprofen 200mg",
  //       "currentStock": 75,
  //       "minStock": 150,
  //       "daysSinceRestock": 10,
  //       "supplier": "PharmaPlus Inc",
  //       "lastOrderDate": "2023-10-05",
  //       "priority": "medium"
  //     },
  //     {
  //       "productId": "SAFE-001",
  //       "productName": "N95 Masks",
  //       "currentStock": 220,
  //       "minStock": 500,
  //       "daysSinceRestock": 7,
  //       "supplier": "SafeGear Medical",
  //       "lastOrderDate": "2023-10-10",
  //       "priority": "medium"
  //     },
  //     {
  //       "productId": "DIAB-003",
  //       "productName": "Insulin Pens",
  //       "currentStock": 30,
  //       "minStock": 50,
  //       "daysSinceRestock": 25,
  //       "supplier": "Diabeticare Ltd",
  //       "lastOrderDate": "2023-09-20",
  //       "priority": "high"
  //     },
  //     {
  //       "productId": "DERM-012",
  //       "productName": "Alcohol Swabs",
  //       "currentStock": 800,
  //       "minStock": 2000,
  //       "daysSinceRestock": 5,
  //       "supplier": "MediClean Corp",
  //       "lastOrderDate": "2023-10-12",
  //       "priority": "medium"
  //     },
  //     {
  //       "productId": "EQP-045",
  //       "productName": "Thermometers",
  //       "currentStock": 15,
  //       "minStock": 50,
  //       "daysSinceRestock": 30,
  //       "supplier": "HealthTech Ltd",
  //       "lastOrderDate": "2023-09-15",
  //       "priority": "high"
  //     },
  //     {
  //       "productId": "VIT-078",
  //       "productName": "Vitamin C 1000mg",
  //       "currentStock": 120,
  //       "minStock": 300,
  //       "daysSinceRestock": 12,
  //       "supplier": "NutraSupplies",
  //       "lastOrderDate": "2023-10-08",
  //       "priority": "medium"
  //     },
  //     {
  //       "productId": "BAND-033",
  //       "productName": "Elastic Bandages",
  //       "currentStock": 60,
  //       "minStock": 200,
  //       "daysSinceRestock": 18,
  //       "supplier": "FirstAid Direct",
  //       "lastOrderDate": "2023-09-28",
  //       "priority": "low"
  //     },
  //     {
  //       "productId": "EYE-009",
  //       "productName": "Eye Drops",
  //       "currentStock": 25,
  //       "minStock": 100,
  //       "daysSinceRestock": 22,
  //       "supplier": "OphthaCare Inc",
  //       "lastOrderDate": "2023-09-25",
  //       "priority": "low"
  //     },
  //     {
  //       "productId": "DEV-087",
  //       "productName": "Blood Pressure Monitors",
  //       "currentStock": 8,
  //       "minStock": 25,
  //       "daysSinceRestock": 35,
  //       "supplier": "MediTech Devices",
  //       "lastOrderDate": "2023-09-10",
  //       "priority": "high"
  //     }
  //   ]
  // }

  const transictions = [
      {
        "id": "TX-001",
        "type": "purchase",
        "date": "2023-11-05",
        "product": "Vitamin C Brightening Serum",
        "quantity": 150,
        "supplier": "MediCare Suppliers",
        "pricePerUnit": 0.15,
        "status": "completed"
      },
      {
        "id": "TX-002",
        "type": "restock",
        "date": "2023-11-04",
        "product": "N95 Masks",
        "quantity": 500,
        "supplier": "SafeGear Medical",
        "expectedDelivery": "2023-11-08",
        "status": "pending"
      },
      {
        "id": "TX-001",
        "type": "purchase",
        "date": "2023-11-05",
        "product": "Paracetamol 500mg",
        "quantity": 150,
        "supplier": "MediCare Suppliers",
        "pricePerUnit": 0.15,
        "status": "completed"
      },
      {
        "id": "TX-002",
        "type": "restock",
        "date": "2023-11-04",
        "product": "N95 Masks",
        "quantity": 500,
        "supplier": "SafeGear Medical",
        "expectedDelivery": "2023-11-08",
        "status": "pending"
      },
      {
        "id": "TX-001",
        "type": "purchase",
        "date": "2023-11-05",
        "product": "Paracetamol 500mg",
        "quantity": 150,
        "supplier": "MediCare Suppliers",
        "pricePerUnit": 0.15,
        "status": "completed"
      },
      {
        "id": "TX-002",
        "type": "restock",
        "date": "2023-11-04",
        "product": "N95 Masks",
        "quantity": 500,
        "supplier": "SafeGear Medical",
        "expectedDelivery": "2023-11-08",
        "status": "pending"
      },
      {
        "id": "TX-001",
        "type": "purchase",
        "date": "2023-11-05",
        "product": "Paracetamol 500mg",
        "quantity": 150,
        "supplier": "MediCare Suppliers",
        "pricePerUnit": 0.15,
        "status": "completed"
      },
      {
        "id": "TX-002",
        "type": "restock",
        "date": "2023-11-04",
        "product": "N95 Masks",
        "quantity": 500,
        "supplier": "SafeGear Medical",
        "expectedDelivery": "2023-11-08",
        "status": "pending"
      },
      {
        "id": "TX-001",
        "type": "purchase",
        "date": "2023-11-05",
        "product": "Paracetamol 500mg",
        "quantity": 150,
        "supplier": "MediCare Suppliers",
        "pricePerUnit": 0.15,
        "status": "completed"
      },
      {
        "id": "TX-002",
        "type": "restock",
        "date": "2023-11-04",
        "product": "N95 Masks",
        "quantity": 500,
        "supplier": "SafeGear Medical",
        "expectedDelivery": "2023-11-08",
        "status": "pending"
      },
    ]
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
      // "image": [img, img11, img12, img13, img14]
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
      // "image": [img1]
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
      // "image": [img2]
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
      // "image": [img3]
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
      // "image": [img4]
    },
    {
      "id": 6,
      "name": "Anthelios Sunscreen SPF 50",
      "category": "Skincare",
      "description": "Matte-finish mineral sunscreen with broad spectrum protection, suitable for sensitive skin.",
      "price": 19.99,
      "stock": 30,
      "supplier": "La Roche-Posay",
      "expiryDate": "2026-01-01",
      "rate": 4.9,
      // "image": [img5]
    }
  ])
  const [lowQuantityProducts, setLowQuantityProducts] = useState([]);

  const checkLowQuantity = (threshold = 50) => {
    return products.filter(product => product.stock < threshold);
  };

  useEffect(() => {
    const lowStockProducts = checkLowQuantity();
    setLowQuantityProducts(lowStockProducts);
  }, []); 
      

  return (
    <div className='w-full h-fit flex justify-between items-center flex-col md:flex-row'>
    <SideBar/>
    <div className='w-[95%] min-h-screen h-fit flex justify-evenly items-center flex-col my-5 md:my-0'>
        <h1 className='w-[90%] pb-2 border-b-2 border-[#0693be] text-[#0693be] text-4xl font-semibold'>Inventory</h1>
        <div className='w-[90%] h-20 flex justify-between items-center'>
            <div className='w-[100%] md:w-[50%] lg:w-[30%] h-14 flex md:justify-evenly md:items-center items-start'>
                                <input type='text' placeholder='Search...' className='w-[50%] md:w-72 h-12 outline-none px-2 rounded-xl border-2 border-[#0693be]'/>
                                  <button className='w-12 h-12  bg-[#0693be] hover:bg-[#0693be90] transition ease-in-out delay-50 text-white rounded-full flex justify-center items-center'>
                                      <BsSearch size={20}/>
                                  </button>
                              </div>
            {/* <button className='w-52 h-12 bg-[#0693be] hover:bg-[#0693be90] transition ease-in-out delay-50 text-white text-lg rounded-xl'>Add Prescription</button> */}
        </div>
        <div className='w-[90%] min-h-[500px] h-fit mb-3'>
            <RestockComponent data={lowQuantityProducts}/>
            <TransactionHistory data={transictions}/>
        </div>
    </div>
</div>
  )
}

export default Inventory