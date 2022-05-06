import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './auth';

export function RequiredAuth({ children, redirectTo }) { //children pq dentro dele tem um componente que queremos acesssar
    const { logged } = useContext(AuthContext);
    
    return logged ? 
    children : <Navigate to={redirectTo} />; //OU SEJA, OU VAI RETORNAR O CHILDREN, FILHO QUE ESTA NO MEIO DELE OU RETORNA PARA LOGIN
  }