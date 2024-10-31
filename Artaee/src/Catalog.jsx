import React from 'react'; 
import { Link } from 'react-router-dom';
import './Catalog.css';
import Monedero from './Monedero';

// Importar imágenes desde la carpeta assets
import atrasLikeCrazy from './assets/atrasLikeCrazy.png';
import frenteLikeCrazy from './assets/frenteLikeCrazy.png';
import layover from './assets/Layover.png';
import layoverBolsa from './assets/LayoverBolsa.png';
import jack from './assets/jack.png';
import btsRanitas from './assets/btsranitas.png';

// Importar imágenes de Haegum y Next to you
import PlayeraHaegum from './assets/PlayeraHaegum.png';
import AtrasHaegum from './assets/AtrasHaegum.png';
import FrenteHaegum from './assets/FrenteHaegum.png';
import PlayeraNextToYou from './assets/PlayeraNextToYou.png';

// Importar imágenes de Bangtan Ternurines
import Namjoon from './assets/Namjoon.png';
import Seokjin from './assets/Seokjin.png';
import Yoongi from './assets/Yoongi.png';
import Hoseok from './assets/Hoseok.png';
import Jimin from './assets/Jimin.png';
import Taehyung from './assets/Taehyung.png';
import Jungkook from './assets/Jungkook.png';

const Catalog = () => {
    return (
        <div className="catalog-page">
            <header className="catalog-header">
                <h1 className="header-title">Catálogo</h1>
                <p className="header-subtitle">Recuerda que eres <span className="italic">artaee</span></p>
                
                <nav className="header-nav">
                    <ul  className="header-list">
                        <li><Link to="/">Playeras</Link></li> {/* Enlace a la página de Playeras */}
                        <li><Link to="/monedero">Monederos</Link></li>
                        <li><Link to="/llaveros">Llaveros</Link></li>
                        <li><Link to="/portavasos">Portavasos</Link></li> {/* Agregado el enlace a Portavasos */}
                        <li><Link to="/medidas">Medidas</Link></li> {/* Agregado el enlace a Medidas */}
                        <li><Link to="/como-hacer-pedido">¿Cómo hago un pedido?</Link></li> {/* Agregado el enlace a Cómo hago un pedido */}
                        <li><Link to="/envios-y-entregas">Envíos y entregas</Link></li> {/* Enlace a Envíos y entregas */}
                        <li><Link to="/nota">¡Nota!</Link></li> {/* Enlace a Nota */}
                    </ul>
                </nav>
            </header>

            <div className="catalog-container">
                {/* Contenedor principal con Like crazy y Layover */}
                <div className="catalog-border">
                    <section className="collection">
                        <h2 className="collection-title">Like crazy</h2>
                        <div className="product">
                            <img src={atrasLikeCrazy} alt="Sudadera Crewneck atrás" className="product-image" />
                            <div className="product-details">
                                <h3 className="product-title">CREWNECK (cuello redondo)</h3>
                                <p className="product-price">$450 S-XL</p>
                                <p className="product-colors">Colores: <span className="color-swatch black"></span></p>
                            </div>
                        </div>
                        <div className="product">
                            <img src={frenteLikeCrazy} alt="Sudadera Crewneck frente" className="product-image" />
                        </div>
                    </section>

                    <section className="collection">
                        <h2 className="collection-title">Layover</h2>
                        <div className="product">
                            <div className="product-details">
                                <h3 className="product-title">CREWNECK (cuello redondo)</h3>
                                <p className="product-price">$420 S-XL</p>
                                <h3 className="product-title">HOODIE (capucha y bolso)</h3>
                                <p className="product-price">$450 S-XL (+$30 para XXL)</p>
                                <p className="product-colors">Colores: <span className="color-swatch green"></span></p>
                            </div>
                            <img src={layover} alt="Hoodie Layover" className="product-image" />
                            <img src={layoverBolsa} alt="Hoodie Layover Bolsa" className="product-image" />
                        </div>
                    </section>
                </div>

                {/* Contenedor principal de Bangtan Ternurines */}
                <section className="bangtan-container">
                    <h2 className="bangtan-title">Bangtan Ternurines</h2>
                    <p className="bangtan-info">PLAYERA (cuello redondo)<br />$250 S-XL<br />+$30 XXL</p>

                    <div className="bangtan-products">
                        <div className="bangtan-item">
                            <img src={Namjoon} alt="Namjoon" className="bangtan-image" />
                            <p className="bangtan-name">Namjoon</p>
                        </div>
                        <div className="bangtan-item">
                            <img src={Seokjin} alt="Seokjin" className="bangtan-image" />
                            <p className="bangtan-name">Seokjin</p>
                        </div>
                        <div className="bangtan-item">
                            <img src={Yoongi} alt="Yoongi" className="bangtan-image" />
                            <p className="bangtan-name">Yoongi</p>
                        </div>
                        <div className="bangtan-item">
                            <img src={Hoseok} alt="Hoseok" className="bangtan-image" />
                            <p className="bangtan-name">Hoseok</p>
                        </div>
                        <div className="bangtan-item">
                            <img src={Jimin} alt="Jimin" className="bangtan-image" />
                            <p className="bangtan-name">Jimin</p>
                        </div>
                        <div className="bangtan-item">
                            <img src={Taehyung} alt="Taehyung" className="bangtan-image" />
                            <p className="bangtan-name">Taehyung</p>
                        </div>
                        <div className="bangtan-item">
                            <img src={Jungkook} alt="Jungkook" className="bangtan-image" />
                            <p className="bangtan-name">Jungkook</p>
                        </div>
                    </div>
                </section>

                {/* Contenedor adicional para Haegum */}
                <div className="additional-container">
                    <section className="collection">
                        <h2 className="collection-title">Haegum</h2>
                        <div className="product">
                            <img src={PlayeraHaegum} alt="Playera Haegum arriba" className="product-image" />
                            <div className="product-details">
                                <h3 className="product-title">PLAYERA (cuello redondo)</h3>
                                <p className="product-price">$270 S-XL</p>
                                <p className="product-price">+$30 para XXL</p>
                                <p className="product-colors">Colores: <span className="color-swatch white"></span> <span className="color-swatch red"></span></p>
                            </div>
                        </div>
                        <div className="product">
                            <img src={AtrasHaegum} alt="Playera Haegum atrás" className="product-image" />
                        </div>
                        <div className="product">
                            <img src={FrenteHaegum} alt="Playera Haegum frente" className="product-image" />
                        </div>
                    </section>
                </div>

                {/* Contenedor adicional para Jack y BTS Ranitas */}
                <div className="additional-container">
                    <section className="collection">
                        <h2 className="collection-title">Jack y BTS Ranitas</h2>
                        <div className="product">
                            <img src={jack} alt="Jack" className="product-image" />
                            <div className="product-details">
                                <h3 className="product-title">Jack</h3>
                                <p className="product-type">Playera</p>
                                <p className="product-price">$250 S-XL</p>
                                <p className="product-colors">Colores: <span className="color-swatch white"></span></p>
                                <p className="product-price">+$30 XXL</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src={btsRanitas} alt="BTS Ranitas" className="product-image" />
                            <div className="product-details">
                                <h3 className="product-title">BTS Ranitas</h3>
                                <p className="product-type">Playera</p>
                                <p className="product-price">$250 S-XL</p>
                                <p className="product-colors">Colores: <span className="color-swatch black"></span></p>
                                <p className="product-price">+$30 XXL</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <Monedero /> {/* Componente Monedero para incluir aquí */}
        </div>
    );
};

export default Catalog;
