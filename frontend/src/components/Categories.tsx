import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesPage: React.FC = () => {
  // Array of categories
  const categories: string[] = ['Phone', 'Computer', 'TV', 'Earphone', 'Tablet', 'Charger', 'Mouse', 'Keypad', 'Bluetooth', 'Pendrive', 'Remote', 'Speaker', 'Headset', 'Laptop', 'PC'];

  return (
    <div>
       <h1 className="text-3xl font-bold text-center mb-8">Categories</h1>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category: string) => (
          <Link
            key={category}
            to={{
              pathname: `/categories/${category.toLowerCase()}/products`,
              search: '?company=AMZ&top=3&minPrice=1&maxPrice=10000'
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
