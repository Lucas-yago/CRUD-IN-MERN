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

import { PageError } from './pages/page-error';
import {PrivateRoute} from './services/privateRoute';

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/*Rotas cliente*/}
                <Route path="/"  element={<Home/>} />
                <Route path="/products/:idProducts"  element={ <ProductsDetails/>  } />
                
                {/*Rotas Admin*/}
                <Route path="/admin"  element={ <PrivateRoute> <Dashboard/> </PrivateRoute> }/>
                <Route path="/admin/login"  element={<Login/>}/>
                <Route path="/admin/products"  element={<Products/>}/>
                <Route path="/admin/products/register"  element={<ProductsRegister/>}/>
                <Route path="/admin/products/edit/:id"  element={<ProductsEdit/>}/>
                
                <Route path="/admin/users"  element={ <PrivateRoute> <Users/> </PrivateRoute> }/>
                <Route path="/admin/users/register"  element={ <PrivateRoute> <UsersRegister/> </PrivateRoute> }/>
                <Route path="/admin/users/edit/:id"  element={ <PrivateRoute> <UsersEdit/> </PrivateRoute> }/>
                <Route path='*' element={<PageError/>} />
            </Routes>
        </BrowserRouter>
    );
};
