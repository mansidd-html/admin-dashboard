import React from 'react'
import TopBar from './Component/TopBar/TopBar'
import './app.css'
import Sidebar from './Component/Sidebar/Sidebar'
import Home from './Pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './Pages/UserList/UserList'
import User from './Pages/User/User'
import NewUser from './Pages/NewUser/NewUser'
import Productlist from './Pages/ProductList/Productlist'
import Product from './Pages/Product/Product'
import NewProduct from './Pages/newProduct/NewProduct'
const App = () => {
  return (
    <>
      <TopBar />
      <div className='container'>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<UserList />} />
            <Route path='/user/:userId' element={<User />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/newUser' element={<NewUser />} />
            <Route path='/newProduct' element={<NewProduct />} />
            <Route path='/products' element={<Productlist />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
