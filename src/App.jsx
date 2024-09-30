import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Pages/Product.jsx';
import Pricing from './Pages/Pricing.jsx';
import Homepage from './Pages/Homepage.jsx';
import PageNotFound from './Pages/PageNotFound.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='product' element={<Product />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
