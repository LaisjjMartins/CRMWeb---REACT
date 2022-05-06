import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Menu } from "../../components/Menu";

import firebase from '../../Config/firebase';
import "firebase/firestore";


export function EditClient() {
    let parametros = useParams();
    const navigate = useNavigate();
    const db = firebase.firestore();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [fone, setFone] = useState('');
    const [mensagem, setMensagem] = useState('');

   useEffect(()=>{
       firebase.firestore().collection('clientes').doc(parametros.id).get().then((res) => {
           setNome(res.data().nome);
           setEmail(res.data().email);
           setFone(res.data().fone);
   
       })
   },[parametros.id]) //Quando pega de fora, tem que por como parametro para caso mudar, pesquisar de novo

    function Edit() {
        if(nome.length === 0){
            setMensagem('Informe o nome');
          }else if(email.length === 0){
            setMensagem('Informe o e-mail');
          }
          else if(fone.length === 0){
            setMensagem('Informe o telefone');
          }else{
          db.collection('clientes').doc(parametros.id).update({
            nome : nome,
            email: email,
            fone: fone
          }).then(()=>{
            setMensagem('')
            alert('Dados do cliente atualizados com sucesso!')
            navigate('/home')
            
          }).catch((error)=>{
            setMensagem(error.message)
          })
        }
        }
    console.log(parametros.id)

    return (<div>
        <Menu />
        <div className="container-fluid titulo">

          <div className="offset-lg-3 col-lg-6">
            <h1>Editar Cliente</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Código</label>
                <input type="text" value={parametros.id} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nome</label>
                <input onChange={(e) => setNome(e.target.value)} value={nome} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />              
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />              
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Fone</label>
                <input  onChange={(e) => setFone(e.target.value)} value={fone} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />              
              </div>

              <div className="text-center">
                <Link to="/home" className="btn btn-outline-primary btn-acao">Cancelar</Link>
                <button onClick={Edit} type="button" className="btn btn-primary btn-acao">Salvar</button>
                
              </div>

              {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
             
            </form>
          </div>
        </div>
    </div>
    )
  }