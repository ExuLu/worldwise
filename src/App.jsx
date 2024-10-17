import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { CitiesProvider } from './contexts/CitiesContext.jsx';
import { AuthProvider } from './contexts/FakeAuthContext.jsx';
import ProtectedRoute from './pages/ProtectedRoute.jsx';

import City from './components/City.jsx';
import CityList from './components/CityList.jsx';
import CountryList from './components/CountryList.jsx';
import Form from './components/Form.jsx';
import SpinnerFullPage from './components/SpinnerFullPage.jsx';

const AppLayout = lazy(() => import('./pages/AppLayout.jsx'));
const Homepage = lazy(() => import('./pages/Homepage.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const PageNotFound = lazy(() => import('./pages/PageNotFound.jsx'));
const Pricing = lazy(() => import('./pages/Pricing.jsx'));
const Product = lazy(() => import('./pages/Product.jsx'));

const App = () => {
  return (
    <div>
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Suspense fallback={<SpinnerFullPage />}>
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
            </Suspense>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
