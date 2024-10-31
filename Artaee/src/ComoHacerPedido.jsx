import React from 'react'; 
import { Link } from 'react-router-dom';
import './Catalog.css'; // Usamos el mismo estilo para la cabecera
import './Medidas.css'; // Usamos el mismo estilo para conservar el diseño
import Pedido1 from './assets/Pedido1.png';
import Pedido2 from './assets/Pedido2.png';
import './ComoHacerPedido.css';

const ComoHacerPedido = () => {
    return (
        <div className="catalog-page">
            {/* Cabecera igual a Medidas */}
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
                        <li><span to="/envio-entrega">Envíos y entregas</span></li>
                        <li><Link to="/nota">¡Nota!</Link></li> {/* Convertido a enlace */}
                    </ul>
                </nav>
            </header>

            {/* Contenedor para las instrucciones de pedido */}
            <div className="medidas-container">
                <h1><strong>¿Cómo hago un pedido?</strong></h1>
                <img src={Pedido1} alt="Pedido 1" style={{ width: '70%', height: 'auto' }} />
                <p>@artaee.store</p>
            </div>

            <div className="medidas-container">
                <h2><strong>From: artaee</strong></h2>
                <p><strong>For: youth</strong></p>
                <p>Dear...</p>
                <ol>
                    <li>Envia DM indicando cuál(es) de nuestros modelos te interesa.</li>
                    <li>Pago del 50% o total de la compra (enviar comprobante de pago).</li>
                    <li>Entra en proceso de elaboración (7-14 días hábiles).</li>
                    <li>Pago de envío. Entrega: se coordina por DM fecha y hora.</li>
                    <li>Te hacemos llegar tu guía de rastreo.</li>
                </ol>
                <p><strong>¡Y listo!</strong></p>
                <p>(Recuerda leer términos y condiciones)</p>
            </div>

            <div className="medidas-container">
                <h2><strong>Datos de pago</strong></h2>
                <p>Transferencia</p>
                <img src={Pedido2} alt="Pedido 2" style={{ width: '70%', height: 'auto' }} />
                <h3><strong>BBVA</strong></h3>
                <p><strong>No. de tarjeta:</strong></p>
                <p>4152 3138 8955 0708</p>
                <p><strong>Maria Fernanda Victoria Cruz</strong></p>
                <p>@artaee.store</p>
            </div>
        </div>
    );
};

export default ComoHacerPedido;
