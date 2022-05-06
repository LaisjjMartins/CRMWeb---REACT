import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/auth';

import Logo from "../../Images/logo.png";

import "./styles.css"
export function Menu() {
  const {setLogged} = useContext(AuthContext);

  function Logout(){
      setLogged(false);
      localStorage.removeItem('logged');
  }
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-dark">

        <div className="container-fluid">
                
            <a className="navbar-brand" href="/#">
              <img src={Logo} alt="" height="28" />
            </a>
    
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">

              <li className="nav-item">
                  <Link to="/home" className="nav-link" aria-current="page">Home</Link>
                </li>

                <li className="nav-item">
                    <Link to="/home/newClient" className="nav-link" aria-current="page">Novo Cliente</Link>
                </li>

                <li className="nav-item">
                    <a onClick={Logout} className="nav-link logout" aria-current="page">Sair</a>
                </li>
               
              </ul>
            </div>    
          
        </div>
      </nav>
    );
}