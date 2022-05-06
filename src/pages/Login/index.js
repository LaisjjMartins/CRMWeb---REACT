import React, { useState, createContext, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoSmall from "../../Images/logo-small2.png";
import {AuthContext} from "../../Context/auth";
import firebase from '../../Config/firebase';
import 'firebase/auth';

import './styles.css';

export function Login() {
  const {logged, setLogged} = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sucesso, setSucesso] = useState('');

  function LoginUser(){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(firebaseUser){
        localStorage.setItem('logged', 'S');
        setLogged(true);
        setSucesso('S');
        navigate('/home');

        alert('Bem-vindo')
      })
      .catch((error) => {
        localStorage.setItem('logged', 'N');
        setLogged(false);
        setSucesso('N');
      });
  }  

  console.log("LOGIN REALIZADO:", sucesso);
  console.log('LOGADO', logged)
  return (
    <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
        <img className="mb-4" src={LogoSmall} alt="" />
        <h1 className="h3 mb-3 fw-normal">Login</h1>

        <div className="form-floating">
          <input onChange={(event) => { setEmail(event.target.value) }} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
          <label htmlFor="floatingInput">E-mail</label>
        </div>

        <div className="form-floating">
          <input onChange={(event) => { setPassword(event.target.value) }} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
          <label htmlFor="floatingPassword">Senha</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="button" onClick={LoginUser}>Acessar</button>

        {
          // sucesso === 1 ? 'faca isso' : 'faca aquilo'
        sucesso === 'N' ? <div className="alert alert-danger mt-2" role="alert">E-mail ou senha inválida.</div> : null}

        <div className="login-links mt-5">
          <Link to="/resetPassword" className="mx-3">Esqueci minha senha</Link>
          <Link to="/newUser" className="mx-3">Criar uma conta</Link>
        </div>

        <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por Laís com base nos vídeos de 99 Coders</p>
      </form>
    </div>
  );
}