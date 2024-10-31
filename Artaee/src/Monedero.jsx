import React from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css'; // Usamos el mismo estilo para la cabecera
import './Monedero.css';
import monederoImg from './assets/Monedero.png';

const Monedero = () => {
    return (
        <div className="catalog-page">
            {/* Cabecera importada de Catalog */}
            <header className="catalog-header">
                <h1 className="header-title">Catálogo</h1>
                <p className="header-subtitle">Recuerda que eres <span className="italic">artaee</span></p>
                
                <nav className="header-nav">
                    <ul className="header-list">
                        <li><Link to="/">Playeras</Link></li> {/* Enlace a la ruta de Catalog */}
                        <li><Link to="/monedero">Monederos</Link></li>
                        <li><Link to="/llaveros">Llaveros</Link></li> {/* Enlace para Llaveros */}
                        <li><Link to="/portavasos">Portavasos</Link></li> {/* Enlace para Portavasos */}
                        <li><Link to="/medidas">Medidas</Link></li> {/* Enlace para Medidas */}
                        <li><Link to="/como-hacer-pedido">¿Cómo hago un pedido?</Link></li> {/* Enlace para pedido */}
                        <li><Link to="/envios-y-entregas">Envíos y entregas</Link></li> {/* Enlace para envíos */}
                        <li><Link to="/nota">¡Nota!</Link></li> {/* Enlace para nota */}
                    </ul>
                </nav>
            </header>

            {/* Contenido específico de Monedero */}
            <div className="monedero-container">
                <h1 className="monedero-title">Monederos</h1>
                <p className="monedero-subtitle">
                    Hecho a mano<br />
                    Bordados con forro interno<br />
                    Tamaño aprox. 11×11 cm
                </p>
                <img src={monederoImg} alt="Monedero" className="monedero-image" />
                <div className="monedero-details">
                    <h2>Características:</h2>
                    <ul>
                        <li>Diseño moderno y funcional</li>
                        <li>Material de alta calidad</li>
                        <li>Varios compartimentos para monedas y billetes</li>
                    </ul>
                    <h2>Precios:</h2>
                    <p>$150 - $300 dependiendo del modelo</p>
                </div>
            </div>
        </div>
    );
};

export default Monedero;
