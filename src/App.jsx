import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import City from './components/City.jsx';
import CityList from './components/CityList.jsx';
import CountryList from './components/CountryList.jsx';
import Form from './components/Form.jsx';

// import AppLayout from './pages/AppLayout.jsx';
// import Homepage from './pages/Homepage.jsx';
// import Login from './pages/Login.jsx';
// import PageNotFound from './pages/PageNotFound.jsx';
// import Pricing from './pages/Pricing.jsx';
// import Product from './pages/Product.jsx';

const AppLayout = lazy(() => import('./pages/AppLayout.jsx'));
const Homepage = lazy(() => import('./pages/Homepage.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const PageNotFound = lazy(() => import('./pages/PageNotFound.jsx'));
const Pricing = lazy(() => import('./pages/Pricing.jsx'));
const Product = lazy(() => import('./pages/Product.jsx'));

// dist/assets/index-fb16db47.css   30.48 kB │ gzip:   5.12 kB
// dist/assets/index-30451984.js   507.14 kB │ gzip: 147.97 kB

import { CitiesProvider } from './contexts/CitiesContext.jsx';
import { AuthProvider } from './contexts/FakeAuthContext.jsx';
import ProtectedRoute from './pages/ProtectedRoute.jsx';

const App = () => {
  return (
    <div>
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path='product' element={<Product />} />
              <Route path='pricing' element={<Pricing />} />
              <Route path='login' element={<Login />} />
              <Route
                path='app'
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to='cities' />} />
                <Route path='cities' element={<CityList />} />
                <Route path='cities/:id' element={<City />} />
                <Route path='countries' element={<CountryList />} />
                <Route path='form' element={<Form />} />
              </Route>
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
