import React from 'react';
import { Link } from 'react-router-dom';
import Screenshot from "../../Images/screenshot-crm.png"

export function Banner() {
    return (
    <section id="banner">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'> 
                    <h1>Uma plataforma de CRM simples de configurar e fácil de usar.</h1>
                    <h4>Gerencie seus clientes em um único lugar.</h4>
                    <Link to="/newUser" className="btn btn-dark btn-lg btn-banner">Criar uma conta</Link>
                    <Link to="/login" className="btn btn-outline-light btn-lg btn-banner">Fazer login</Link>
                </div>
                    <div className='col-lg-6'>
                       <img src={Screenshot}/>
                    </div> 

                </div>

            </div>

        </section>
    )
}

//Sistema GRID que foi usado: A ideia é que ele é composto por 12 colunas, ali foi definido 6 para cada lado, quando diminuir a tela, ele entende que a coluna tem que ir pra baixo
// lg = Desktop
// md = tablet
// sm = mobile