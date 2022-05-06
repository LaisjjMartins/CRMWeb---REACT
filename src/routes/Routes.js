import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from "../pages/Home";
import { HomeLogged } from '../pages/HomeLogged';
import { Login } from "../pages/Login";
import { NewUser } from '../pages/NewUser';
import { ResetPassword } from "../pages/ResetPassword";
import { NewClient } from "../pages/NewClient";
import { EditClient } from '../pages/EditClient';
import {ErrorNotFound} from "../pages/NotFound";

import { RequiredAuth } from '../Context/RequiretAuth';

export function Routees() {

  return (

      <BrowserRouter>
        <Routes>
          {/*ROTAS PUBLICAS */}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/newUser' element={<NewUser />} />
          <Route exact path='/resetPassword' element={<ResetPassword />} />

          {/*ROTAS PRIVADAS */}
          <Route exact path='/home' element={
            <RequiredAuth redirectTo={'/login'}>
              <HomeLogged />
            </RequiredAuth>
          } />
          <Route exact path='/home/newClient' element={
            <RequiredAuth redirectTo={'/login'}>
              <NewClient />
            </RequiredAuth>} />
          <Route exact path='/home/EditClient/:id' element={
            <RequiredAuth redirectTo={'/login'}>
              <EditClient />
            </RequiredAuth>} />

            {/*ROTAS INEXISTENTES */}
            <Route path="*" element={<ErrorNotFound />} />
        </Routes>
      </BrowserRouter>

  );
}

