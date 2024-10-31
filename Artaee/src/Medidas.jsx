import React from 'react'; 
import { Link } from 'react-router-dom';
import './Catalog.css'; // Usamos el mismo estilo para la cabecera
import './Medidas.css';
import Medida1 from './assets/Medida1.png';
import Medida2 from './assets/Medida2.png';
import Medida3 from './assets/Medida3.png';

const Medidas = () => {
    return (
        <div className="catalog-page">
            {/* Cabecera igual a Portavasos */}
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
                        <li><Link to="/como-hacer-pedido">¿Cómo hago un pedido?</Link></li> {/* Enlace para pedido */}
                        <li><Link to="/envios-y-entregas">Envíos y entregas</Link></li> {/* Convertido a enlace */}
                        <li><Link to="/nota">¡Nota!</Link></li> {/* Convertido a enlace */}
                    </ul>
                </nav>
            </header>

            {/* Primer contenedor */}
            <div className="medidas-container">
                <h1>Medidas</h1>
                <p>Revisa la de tu prenda preferida</p>
                <img src={Medida1} alt="Medida 1" />
                <p>@artaee.store</p>
            </div>

            {/* Segundo contenedor */}
            <div className="medidas-container">
                <h2>From: artaee</h2>
                <p>For: youth</p>
                <p>Crewneck</p>
                <p>Sudaderas</p>
                <p>Unisex</p>
                <p>Hoodie</p>
                <img src={Medida2} alt="Medida 2" />
                <table>
                    <thead>
                        <tr>
                            <th>Talla</th>
                            <th>Ancho</th>
                            <th>Largo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>S</td>
                            <td>50.8cm</td>
                            <td>66.7cm</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>55.9cm</td>
                            <td>69.2cm</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>61.0cm</td>
                            <td>71.8cm</td>
                        </tr>
                        <tr>
                            <td>XL</td>
                            <td>66.0cm</td>
                            <td>74.3cm</td>
                        </tr>
                        <tr>
                            <td>XXL</td>
                            <td>71.1cm</td>
                            <td>76.8cm</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Tercer contenedor */}
            <div className="medidas-container">
                <h2>From: artaee</h2>
                <p>For: youth</p>
                <p>Unisex</p>
                <p>Playeras</p>
                <img src={Medida3} alt="Medida 3" />
                <table>
                    <thead>
                        <tr>
                            <th>Talla</th>
                            <th>Ancho</th>
                            <th>Largo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>S</td>
                            <td>45.7cm</td>
                            <td>70.5cm</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>50.8cm</td>
                            <td>73.0cm</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>55.9cm</td>
                            <td>75.6cm</td>
                        </tr>
                        <tr>
                            <td>XL</td>
                            <td>59.1cm</td>
                            <td>78.1cm</td>
                        </tr>
                        <tr>
                            <td>XXL</td>
                            <td>66.0cm</td>
                            <td>80.6cm</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Medidas;
