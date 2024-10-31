import React from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css'; // Usamos el mismo estilo para la cabecera
import './EnvioEntrega.css'; // Usamos el mismo estilo para conservar el diseño
import loveImage from './assets/love.png';

const Nota = () => {
    return (
        <div className="catalog-page">
            <header className="catalog-header">
                <h1 className="header-title">Catálogo</h1>
                <p className="header-subtitle">Recuerda que eres <span className="italic">artaee</span></p>

                <nav className="header-nav">
                    <ul className="header-list">
                        <li><Link to="/">Playeras</Link></li>
                        <li><Link to="/monedero">Monederos</Link></li>
                        <li><Link to="/llaveros">Llaveros</Link></li>
                        <li><Link to="/portavasos">Portavasos</Link></li>
                        <li><Link to="/medidas">Medidas</Link></li>
                        <li><Link to="/como-hacer-pedido">¿Cómo hago un pedido?</Link></li>
                        <li><Link to="/envios-y-entregas">Envíos y entregas</Link></li>
                        <li><Link to="/nota">¡Nota!</Link></li>
                    </ul>
                </nav>
            </header>

            <div className="medidas-container">
                <h1><strong>¡Gracias por apoyar a artaee!</strong></h1>
                <p>Tu apoyo significa el mundo para nosotros. Cada compra ayuda a que podamos seguir creando y mejorando nuestros productos. ¡Eres parte de nuestra familia!</p>
                <img src={loveImage} alt="Love" style={{ width: '70%', height: 'auto' }} />
            </div>
        </div>
    );
};

export default Nota;
