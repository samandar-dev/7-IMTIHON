import Home from './companents/Home/Home';
import { Route, Routes } from 'react-router-dom';
import CartPage from './companents/CartPage/CartPage';
import ShopModal from './companents/ShopModal/ShopModal';
import SaveModal from './companents/SaveModal/SaveModal';
import CartModal from './companents/CartModal/CartModal';
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cartPage/:id' element={<CartPage />} />
      </Routes>
      <ShopModal />
      <SaveModal />
      <CartModal />
    </>
  );
}

export default App;
