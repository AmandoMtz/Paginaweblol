import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalog from './Catalog';
import Monedero from './Monedero';
import Llaveros from './Llaveros';
import Portavasos from './Portavasos';
import ComoHacerPedido from './ComoHacerPedido'; // Importar ComoHacerPedido
import Medidas from './Medidas';
import EnvioEntrega from './EnvioEntrega'; // Importar EnvioEntrega
import Nota from './Nota'; // Importar Nota

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/monedero" element={<Monedero />} />
                <Route path="/llaveros" element={<Llaveros />} />
                <Route path="/portavasos" element={<Portavasos />} />
                <Route path="/medidas" element={<Medidas />} />
                <Route path="/como-hacer-pedido" element={<ComoHacerPedido />} />
                <Route path="/envios-y-entregas" element={<EnvioEntrega />} /> {/* Ruta para EnvioEntrega */}
                <Route path="/nota" element={<Nota />} /> {/* Ruta para Nota */}
            </Routes>
        </Router>
    );
}

export default App;
