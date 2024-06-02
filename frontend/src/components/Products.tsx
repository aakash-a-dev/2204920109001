import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Product {
  id: string;
  name: string;
  company: string;
  category: string;
  price: number;
  rating: number;
  discount: number;
  availability: boolean;
}

const ProductDetailPage: React.FC = () => {
  const { category, productId } = useParams<{ category: string; productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/categories/${category}/products/${productId}?company=AMZ&top=3&minPrice=1&maxPrice=10000`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [category, productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}</p>
      <p>Availability: {product.availability ? 'Available' : 'Not available'}</p>
    </div>
  );
};

export default ProductDetailPage;
