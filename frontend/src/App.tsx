import './App.css'
import CategoriesPage from './components/Categories'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetailPage from './components/Products';

function App() {

  return (
    <Router>
    <div className="App">
      <Routes>
        {/* Route for CategoriesPage */}
        <Route path="/" element={<CategoriesPage/>} />

        {/* Route for ProductDetailPage */}
        <Route path="/categories/:category/products/:productId" element={<ProductDetailPage/>} />

        {/* Add more routes if needed */}
      </Routes>
    </div>
  </Router>
  )
}

export default App
