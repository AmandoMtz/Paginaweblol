import React from 'react';  
import { Link } from 'react-router-dom';
import './Catalog.css'; // Usamos el mismo estilo para la cabecera
import './Portavasos.css';
import Portavasos1 from './assets/Portavasos1.png';
import Portavasos2 from './assets/Portavasos2.png';
import Portavasos3 from './assets/Portavasos3.png';
import Portavasos4 from './assets/Portavasos4.png';
import Portavasos5 from './assets/Portavasos5.png';

const Portavasos = () => {
    return (
        <div className="catalog-page">
            {/* Cabecera importada de Llaveros */}
            <header className="catalog-header">
                <h1 className="header-title">Catálogo</h1>
                <p className="header-subtitle">Recuerda que eres <span className="italic">artaee</span></p>
                
                <nav className="header-nav">
                    <ul className="header-list">
                        <li><Link to="/">Playeras</Link></li>
                        <li><Link to="/monedero">Monederos</Link></li>
                        <li><Link to="/llaveros">Llaveros</Link></li>
                        <li><Link to="/portavasos">Portavasos</Link></li>
                        <li><Link to="/medidas">Medidas</Link></li> {/* Asegúrate de que este enlace sea correcto */}
                        <li><Link to="/como-hacer-pedido">¿Cómo hago un pedido?</Link></li> {/* Enlace para pedido */}
                        <li><Link to="/envios-y-entregas">Envíos y entregas</Link></li> {/* Enlace para envíos */}
                        <li><Link to="/nota">¡Nota!</Link></li> {/* Enlace para nota */}
                    </ul>
                </nav>
            </header>

            {/* Contenido específico de Portavasos */}
            <div className="llaveros-layout"> {/* Ajuste en la clase para usar la disposición flex */}
                {/* Primer contenedor de Portavasos */}
                <div className="llaveros-container">
                    <div className="llaveros-header">
                        <h1>Portavasos</h1>
                        <p>Hecho a mano</p>
                        <p>Tamaño aprox. 10x10cm</p>
                    </div>
                    <div className="llaveros-gallery">
                        <div className="llavero-item">
                            <img src={Portavasos1} alt="Portavasos 1" className="portavasos1" /> {/* Aplica la nueva clase aquí */}
                            <p>$90</p>
                        </div>
                    </div>
                </div>

                {/* Segundo contenedor de Portavasos */}
                <div className="llaveros-container">
                    <div className="llaveros-header">
                        <h1>Portavasos</h1>
                        <p>Hecho a mano</p>
                        <p>Tamaño aprox. 10x10cm</p>
                    </div>
                    <div className="llaveros-gallery">
                        <div className="llavero-item">
                            <p>Jk tatuaje</p>
                            <img src={Portavasos2} alt="Portavasos 2" />
                            <p>$90</p>
                        </div>
                        <div className="llavero-item">
                            <p>Vante</p>
                            <img src={Portavasos3} alt="Portavasos 3" />
                            <p>$90</p>
                        </div>
                        <div className="llavero-item">
                            <p>Seven</p>
                            <img src={Portavasos4} alt="Portavasos 4" />
                            <p>$90</p>
                        </div>
                        <div className="llavero-item">
                            <p>Honguito</p>
                            <img src={Portavasos5} alt="Portavasos 5" />
                            <p>$90</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portavasos;
