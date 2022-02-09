import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

//iMPORT ADMIN
import { Dashboard } from './pages/admin/dashboard';
import { Login } from './pages/admin/login'
import { Products } from './pages/admin/products';
import { ProductsEdit } from './pages/admin/products/products.edit';
import { ProductsRegister } from './pages/admin/products/products.register';

import { Users } from './pages/admin/users';
import { UsersEdit } from './pages/admin/users/users.edit';
import { UsersRegister } from './pages/admin/users/users.register';

//IMPORT CLIENT
import { Home } from './pages/cliente/home';
import { ProductsDetails } from './pages/cliente/products/products.details';

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/*Rotas cliente*/}
                <Route path="/" exact element={<Home/>} />
                <Route path="/products/:idProducts" exact element={<ProductsDetails/>} />
                
                {/*Rotas Admin*/}
                <Route path="/admin" exact element={<Dashboard/>}/>
                <Route path="/admin/login" exact element={<Login/>}/>
                <Route path="/admin/products" exact element={<Products/>}/>
                <Route path="/admin/products/register" exact element={<ProductsRegister/>}/>
                <Route path="/admin/products/edit/:id" exact element={<ProductsEdit/>}/>
                
                <Route path="/admin/users" exact element={<Users/>}/>
                <Route path="/admin/users/register" exact element={<UsersRegister/>}/>
                <Route path="/admin/users/edit/:id" exact element={<UsersEdit/>}/>
            </Routes>
        </BrowserRouter>
    );
};
