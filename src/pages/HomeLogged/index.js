import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListClients } from "../../components/ListClients";
import { Menu } from '../../components/Menu';
import { ClientsPDF } from '../../components/Reports/Clients';
import firebase from '../../Config/firebase';
import "firebase/firestore";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import SweetAlert from 'react-bootstrap-sweetalert';

import "./styles.css"


export function HomeLogged() {
  const [sweetalert, setSweetAlert] = useState(false);
  const [confirmacaoId, setConfirmacaoId] = useState('');
  const [clientes, setClientes] = useState([]);
  const [busca, setBusca] = useState('');
  const [texto, setTexto] = useState('');
  const [deleted, setDeleted] = useState(''); //variavel que vai ver se algo foi excluido para recarregar, no useEffect! Ele vai executar uma nova busca, sempre que o busca ou o deleted mudar

  function deleteUser(id) {
    firebase.firestore().collection('clientes').doc(id).delete().then(async res => {
      setDeleted('s');
      setSweetAlert(false);
    })
  }

  function AlertDelete(id){
    setConfirmacaoId(id);
    setSweetAlert(true);
    
  }

  useEffect(() => {
    let listaCli = [];
    firebase.firestore().collection('clientes').get().then(async res => {
      await res.docs.forEach((doc) => {
        if (doc.data().nome.indexOf(busca) >= 0) {
          listaCli.push({
            id: doc.id,
            nome: doc.data().nome,
            email: doc.data().email,
            fone: doc.data().fone
          });
        }
      })

      setClientes(listaCli);
    })
  }, [busca, deleted]);

  return <div>
    <Menu />
    <div className="container-fluid titulo">
      <h1>Cadastro de Clientes</h1>

      <div className="row">
        <div className="col-4">
          <Link to='/home/newClient' className="btn btn-primary btns" type="button"><FontAwesomeIcon icon={faAdd} size='1x' color="#FFF" /> Cliente</Link>
          <button onClick={() => {ClientsPDF(clientes)}} className="btn btn-danger btns" type="button" id="button-addon2"><FontAwesomeIcon icon={faFilePdf} size='1x' color="#FFF" /> Gerar PDF</button>

        </div>

        <div className="col-8">
          <div className="input-group mb-3">
            <input onChange={(e) => setTexto(e.target.value)} type="text" className="form-control" placeholder="Pesquisar por nome" aria-describedby="button-addon2" />
            <button onClick={(e) => setBusca(texto)} className="btn btn-primary" type="button" id="button-addon2"><i className="fas fa-search"></i> Pesquisar</button>
          </div>
        </div>
      </div>

      <ListClients arrayClientes={clientes} delete={AlertDelete} alert={setSweetAlert} />

    {sweetalert ?
      <SweetAlert
        warning
        showCancel
        showCloseButton
        confirmBtnText="Sim"
        confirmBtnBsStyle="danger"
        cancelBtnText="Não"
        cancelBtnBsStyle='light'
        title="Exclusão"
        onConfirm={() => {deleteUser(confirmacaoId)}}
        onCancel={() => {setSweetAlert(false)}}
        reverseButtons={true}

      >
        Deseja excluir o cliente selecionado?
      </SweetAlert>
      : null}
    </div>
  </div>
}

