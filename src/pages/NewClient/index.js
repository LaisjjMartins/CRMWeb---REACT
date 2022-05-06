import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from '../../components/Menu';
import './styles.css';

import firebase from "../../Config/firebase";

export function NewClient() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [fone, setFone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const db = firebase.firestore();

  function Register(){
    if(nome.length === 0){
      setMensagem('Informe o nome');
    }else if(email.length === 0){
      setMensagem('Informe o e-mail');
    }
    else if(fone.length === 0){
      setMensagem('Informe o telefone');
    }else{
    db.collection('clientes').add({
      nome : nome,
      email: email,
      fone: fone
    }).then(()=>{
      setMensagem('')
      alert('Novo cliente cadastrado com sucesso!')
      navigate('/home')
      
    }).catch((error)=>{
      setMensagem(error.message)
    })
  }
  }

  return (
    <div>
      <Menu />
      <div className='container-fluid titulo'>
        <div className='offset-lg-3 col-lg-6'>
          <div className='text-center'>
            <h1>Novo Cliente</h1>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Nome</label>
              <input onChange={(event)=>{setNome(event.target.value)}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
              <input onChange={(event)=>{setEmail(event.target.value)}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Fone</label>
              <input onChange={(event)=>{setFone(event.target.value)}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>

            <div className="text-center">
              <button type="button" className="btn btn-outline-primary btn-acao" onClick={() => { navigate('/home') }}>Cancelar</button>
              <button type="button" className="btn btn-primary btn-acao" onClick={Register}>Salvar</button>
            </div>

            {
          // sucesso === 1 ? 'faca isso' : 'faca aquilo'
          mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}

          </form>
        </div>
      </div>
    </div>
  )
}