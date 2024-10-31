import React from 'react'; 
import { Link } from 'react-router-dom';
import './Catalog.css'; // Usamos el mismo estilo para la cabecera
import './ComoHacerPedido.css'; // Usamos el mismo estilo para conservar el diseño
import Envio1 from './assets/Envio1.png';
import Envio2 from './assets/Envio2.png';
import Envio3 from './assets/Envio3.png';
import Envio4 from './assets/Envio4.png';

const EnvioEntrega = () => {
    return (
        <div className="catalog-page">
            {/* Cabecera igual a ComoHacerPedido */}
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

            {/* Primer contenedor */}
            <section className="medidas-container">
                <h1>Envíos y entregas</h1>
                <img src={Envio1} alt="Envio 1" />
                <p>@artaee.store</p>
            </section>

            {/* Segundo contenedor */}
            <section className="medidas-container">
                <h2><strong>From: artaee</strong></h2>
                <p><strong>For: youth</strong></p>
                <p><strong>Correos de México</strong></p>
                <img src={Envio2} alt="Envio 2" />
                <p><strong>Costo:</strong> $75</p>
                <p><strong>Tiempo de envío:</strong> 7-20 días aprox.</p>
            </section>

            {/* Tercer contenedor */}
            <section className="medidas-container">
                <h3><strong>Paquetería privada</strong></h3>
                <img src={Envio3} alt="Envio 3" />
                <p><strong>Costo:</strong> $180</p>
                <p><strong>Tiempo de envío:</strong> 3-7 días aprox.</p>

                <h3><strong>Entregas personales</strong></h3>
                <img src={Envio4} alt="Envio 4" />
                <p>Sin costo extra -CDMX (metro)</p>
                <p>-Edo. México (mexibus)</p>
                <p>-Hongdae (Guadalajara, JAL)</p>
                
                <p><strong>¡Nota!</strong></p>
                <p>Si tu paquete aplica para zona extendida, te lo haremos saber, así como el monto extra que la paquetería nos indique.</p>
                <p><strong>**Aplica únicamente en paquetería privada**</strong></p>
                <p><strong>**Asegúrate de leer T&C**</strong></p>
            </section>
        </div>
    );
};

export default EnvioEntrega;
