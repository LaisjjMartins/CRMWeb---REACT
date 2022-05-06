import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LogoSmall from "../../Images/logo-small2.png";
import './styles.css';

import firebase from '../../Config/firebase';
import 'firebase/auth';

export function ResetPassword() {
  const [email, setEmail]=useState('');
  const [mensagem, setMensagem]=useState('');

  function SendEmail(){
    firebase.auth().sendPasswordResetEmail(email).then(
      res => {
        setMensagem('')
        alert('E-mail enviado com sucesso!')
      }
    ).catch((error) => {
      if(error.message === 'There is no user record corresponding to this identifier. The user may have been deleted.'){
        setMensagem('E-mail não corresponde a nenhuma conta existente')
      }else if(error.message === 'The email address is badly formatted.'){
        setMensagem('E-mail inválido!')
      }else{
        setMensagem(error.message)
      }
  
    })
  }
    return (
    <div className="d-flex align-items-center text-center form-container">
    <form className="form-signin">
      <img className="mb-4" src={LogoSmall} alt="" />
      <h1 className="h3 mb-3 fw-normal">Recuperar Senha</h1>

      <div className="form-floating">
        <input onChange={(event) => {setEmail(event.target.value)}}type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
        <label for="floatingInput">E-mail</label>
      </div>
      
      <button className="w-100 btn btn-lg btn-primary mt-3" type="button" onClick={SendEmail}>Enviar</button>

      {
          // sucesso === 1 ? 'faca isso' : 'faca aquilo'
          mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}

      <div className="login-links mt-5">
          <Link to="/newUser" className="mx-3">Criar uma conta</Link> 
      </div>

      <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por Laís com base nos vídeos de 99 Coders</p>
    </form>
  </div>
    );
}