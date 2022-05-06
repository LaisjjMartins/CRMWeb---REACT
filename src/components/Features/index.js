import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faGlobeAmericas, faColumns } from '@fortawesome/free-solid-svg-icons';

export function Features() {
    return (
    <section id="features">
        <div className='container'>
            <div className='row'>

            <div className="col-lg-4 feature-box">
            <FontAwesomeIcon icon={faHeart} size='5x' color="#0d6efd"/>
                    <h3>Fácil de usar</h3>                    
                    <p>O sistema possui uma interface muito simples e fácil de utilizar.</p>
                </div>

                <div className="col-lg-4 feature-box">
                <FontAwesomeIcon icon={faGlobeAmericas} size='5x' color="#0d6efd"/>
                    <h3>Em qualquer lugar</h3>
                    <p>Gerencie seu fluxo de negócios de forma eficiente, onde quer que você esteja.</p>
                </div>

                <div className="col-lg-4 feature-box">
                <FontAwesomeIcon icon={faColumns} size='5x' color="#0d6efd"/>
                    <h3>Organização é tudo</h3>
                    <p>Tenha sua carteira de clientes sempre muito bem organizada.</p>
                </div>

            </div>

        </div>

    </section>
    )
}