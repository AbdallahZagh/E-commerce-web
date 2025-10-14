import React, { useState } from 'react';
import Card from '../Components/Card';
import NavBar from '../Components/NavBar';
import { BsFunnel, BsSearch } from 'react-icons/bs';
import Filter from '../Models/Filter';

const Search = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);

  const products = [
    { name: 'Hydrating Face Cream', company: 'GlowCare', price: 24.99, rate: 4.5 },
    { name: 'Natural Lip Balm', company: 'EcoBeauty', price: 5.99, rate: 4.2 },
    { name: 'Revitalizing Shampoo', company: 'PureLocks', price: 14.49, rate: 4.7 },
    { name: 'Herbal Body Lotion', company: "Nature's Touch", price: 12.99, rate: 4.4 },
    { name: 'Anti-Aging Serum', company: 'YouthGuard', price: 29.99, rate: 4.8 },
    // Repeated for demo
    { name: 'Hydrating Face Cream', company: 'GlowCare', price: 24.99, rate: 4.5 },
    { name: 'Natural Lip Balm', company: 'EcoBeauty', price: 5.99, rate: 4.2 },
    { name: 'Revitalizing Shampoo', company: 'PureLocks', price: 14.49, rate: 4.7 },
    { name: 'Herbal Body Lotion', company: "Nature's Touch", price: 12.99, rate: 4.4 },
    { name: 'Anti-Aging Serum', company: 'YouthGuard', price: 29.99, rate: 4.8 },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesRating = product.rate >= selectedRating;
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchesPrice && matchesRating && matchesCategory;
  });

  const hasFilters =
    priceRange[0] !== 0 ||
    priceRange[1] !== 100 ||
    selectedRating > 0 ||
    selectedCategories.length > 0;

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <div className="w-full h-20">
        <NavBar />
      </div>

      {/* Search Header */}
      <div className="w-[90%] mx-auto mt-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <h2 className="text-2xl sm:text-3xl font-light text-gray-800">
          Search results for:{" "}
          <span className="font-medium text-gray-900">Product name</span>
        </h2>

        {/* Search Bar + Filters */}
        <div className="w-full md:w-[70%] lg:w-[50%] flex flex-wrap justify-start sm:justify-end items-center gap-3">
          {/* Search Input */}
          <div className="flex w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow sm:w-72 h-12 border-2 border-[#0693be] rounded-l-xl px-3 outline-none"
            />
            <button className="w-12 h-12 bg-[#0693be] hover:bg-[#0693be90] transition text-white rounded-r-xl flex justify-center items-center">
              <BsSearch size={20} />
            </button>
          </div>

          {/* Filter Button */}
          <button
            className="relative w-12 h-12 bg-[#0693be] hover:bg-[#0693be90] transition text-white rounded-full flex justify-center items-center"
            onClick={() => setShowFilters(true)}
          >
            <BsFunnel size={20} />
            {hasFilters && (
              <div className="absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
            )}
          </button>

          {/* Clear Filter */}
          {hasFilters && (
            <button
              onClick={() => {
                setPriceRange([0, 100]);
                setSelectedCategories([]);
                setSelectedRating(0);
              }}
              className="px-3 py-2 text-sm sm:text-base border-2 border-[#0693be] text-[#0693be] hover:text-[#0693be90] hover:border-[#0693be90] rounded-xl transition"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="w-[95%] mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        {filteredProducts.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            price={item.price}
            company={item.company}
            id={item.id}
            rate={item.rate}
          />
        ))}
      </div>

      {/* Filters Modal */}
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
  );
};

export default Search;
