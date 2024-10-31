import React from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css'; // Usamos el mismo estilo para la cabecera
import './Llaveros.css';

// Import the llavero images
import Llavero1 from './assets/Llavero1.png';
import Llavero2 from './assets/Llavero2.png';
import Llavero3 from './assets/Llavero3.png';
import Llavero4 from './assets/Llavero4.png';

const Llaveros = () => {
    return (
        <div className="catalog-page">
            {/* Cabecera importada de Monedero */}
            <header className="catalog-header">
                <h1 className="header-title">Catálogo</h1>
                <p className="header-subtitle">Recuerda que eres <span className="italic">artaee</span></p>
                
                <nav className="header-nav">
                    <ul className="header-list">
                        <li><Link to="/">Playeras</Link></li>
                        <li><Link to="/monedero">Monederos</Link></li>
                        <li><Link to="/llaveros">Llaveros</Link></li>
                        <li><Link to="/portavasos">Portavasos</Link></li>
                        <li><Link to="/medidas">Medidas</Link></li> {/* Enlace para Medidas */}
                        <li><Link to="/como-hacer-pedido">¿Cómo hago un pedido?</Link></li> {/* Enlace para pedido */}
                        <li><Link to="/envios-y-entregas">Envíos y entregas</Link></li> {/* Enlace para envíos */}
                        <li><Link to="/nota">¡Nota!</Link></li> {/* Enlace para nota */}
                    </ul>
                </nav>
            </header>

            {/* Contenido específico de Llaveros */}
            <div className="llaveros-layout">
                {/* Contenedor para Llavero 1 y Llavero 2 */}
                <div className="llaveros-container">
                    <div className="llaveros-header">
                        <h1>Llaveros</h1>
                        <p>Hecho a mano</p>
                        <p>Tamaño aprox. 8x8cm</p>
                    </div>
                    <div className="llaveros-gallery">
                        <div className="llavero-item">
                            <img src={Llavero1} alt="Llavero 1" />
                            <p>Llavero 1</p>
                        </div>
                        <div className="llavero-item">
                            <img src={Llavero2} alt="Llavero 2" />
                            <p>Llavero 2</p>
                        </div>
                    </div>
                    <div className="price-tag">$75</div>
                </div>

                {/* Contenedor para Llavero 3 y Llavero 4 */}
                <div className="llaveros-container">
                    <div className="llaveros-header">
                        <h1>Llaveros</h1>
                        <p>Hecho a mano</p>
                        <p>Tamaño aprox. 6x6cm</p>
                    </div>
                    <div className="llaveros-gallery">
                        <div className="llavero-item">
                            <img src={Llavero3} alt="Llavero 3" />
                            <p>Llavero 3</p>
                        </div>
                        <div className="llavero-item">
                            <img src={Llavero4} alt="Llavero 4" />
                            <p>Llavero 4</p>
                        </div>
                    </div>
                    <div className="price-tag">$75</div>
                </div>
            </div>
        </div>
    );
};

export default Llaveros;
