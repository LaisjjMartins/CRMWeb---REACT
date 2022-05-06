import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash  } from '@fortawesome/free-solid-svg-icons';

import "./styles.css"

export function ListClients(props) {


    return <table className="table table-hover table-bordered">
        <thead>
            <tr className="table-secondary">
                <th scope="col">Código</th>
                <th scope="col">Nome</th>
                <th scope="col">E-mail</th>
                <th scope="col">Telefone</th>
                <th scope="col" className='col-acao'></th>
            </tr>
        </thead>
        <tbody>

            {
                props.arrayClientes.map((cliente) => {
                    return <tr key={cliente.id}>
                        <th scope="row">{cliente.id}</th>
                        <td>{cliente.nome}</td>
                        <td>{cliente.email}</td>
                        <td>{cliente.fone}</td>
                        <td>
                        <Link to={`/home/editClient/${cliente.id}`}><FontAwesomeIcon className='icone-acao' icon={faEdit} size='1x' color="#0d6efd"/></Link>
                        <Link to='#' onClick={() => props.delete(cliente.id)}><FontAwesomeIcon className='icone-acao' icon={faTrash} size='1x' color="#ff4040"/></Link>
                    </td>
                    </tr>
                })
            }


        </tbody>
    </table>
}

