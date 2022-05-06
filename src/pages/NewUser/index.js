import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoSmall from "../../Images/logo-small2.png";
import './styles.css';

import firebase from '../../Config/firebase';
import 'firebase/auth';

export function NewUser() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensagem, setMensagem] = useState('');

  function User() {
    setMensagem('');
    if (!email || !password) {
      setMensagem('Informe os campos!')
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      res => {
        navigate('/home')
        alert('Usuário cadastrado com sucesso')
      }
    ).catch((error) => {
      if(error.message === 'Password should be at least 6 characters'){
        setMensagem('Senha tem que ter pelo menos 6 caracteres!')
      }else if(error.message === 'The email address is badly formatted.'){
        setMensagem('E-mail inválido!')
      }
      else if(error.message === 'The email address is already in use by another account.'){
        setMensagem('Já existe uma conta com esse e-mail!')
      }else{
        setMensagem('Erro ao criar conta:', error.message);
      }
    });
}  

  return (
    <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
        <img className="mb-4" src={LogoSmall} alt="" />
        <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>

        <div className="form-floating">
          <input onChange={(event) => { setEmail(event.target.value) }} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
          <label htmlFor="floatingInput">E-mail</label>
        </div>

        <div className="form-floating">
          <input onChange={(event) => { setPassword(event.target.value) }} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
          <label htmlFor="floatingPassword">Senha</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="button" onClick={User}>Criar Conta</button>

        {
          // sucesso === 1 ? 'faca isso' : 'faca aquilo'
          mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}

        <div className="login-links mt-5">
          <Link to="/login" className="mx-3">Já tenho uma conta</Link>
        </div>

        <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por Laís com base nos vídeos de 99 Coders</p>
      </form>
    </div>
  );
}