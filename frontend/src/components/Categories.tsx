import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CategoriesPage: React.FC = () => {
  // Array of categories
  const categories: string[] = ['Phone', 'Computer', 'TV', 'Earphone', 'Tablet', 'Charger', 'Mouse', 'Keypad', 'Bluetooth', 'Pendrive', 'Remote', 'Speaker', 'Headset', 'Laptop', 'PC'];

  // State for input values
  const [company, setCompany] = useState('AMZ');
  const [minPrice, setMinPrice] = useState('1');
  const [maxPrice, setMaxPrice] = useState('10000');
  const [topProducts, setTopProducts] = useState('3');

  return (
    <div>
      <div className="flex justify-between mb-4">
        <div>
          <label htmlFor="company" className="mr-2">Company:</label>
          <select id="company" value={company} onChange={(e) => setCompany(e.target.value)} className="border p-2 rounded-md mr-2">
            <option value="AMZ">AMZ</option>
            <option value="FLP">FLP</option>
            <option value="SNP">SNP</option>
            <option value="MYN">MYN</option>
            <option value="AZO">AZO</option>
          </select>
        </div>
        <div>
          <label htmlFor="minPrice" className="mr-2">Min Price:</label>
          <input type="number" id="minPrice" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="border p-2 rounded-md mr-2" />
          <label htmlFor="maxPrice" className="mr-2">Max Price:</label>
          <input type="number" id="maxPrice" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="border p-2 rounded-md mr-2" />
          <label htmlFor="topProducts" className="mr-2">Top Products:</label>
          <input type="number" id="topProducts" value={topProducts} onChange={(e) => setTopProducts(e.target.value)} className="border p-2 rounded-md mr-2" />
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center mb-8">Categories</h1>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category: string) => (
          <Link
            key={category}
            to={{
              pathname: `/categories/${category.toLowerCase()}/products`,
              search: `?company=${company}&top=${topProducts}&minPrice=${minPrice}&maxPrice=${maxPrice}`
            }}
            className="border p-4 rounded-lg text-center hover:bg-gray-200"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
