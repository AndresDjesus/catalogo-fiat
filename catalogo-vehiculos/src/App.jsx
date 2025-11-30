// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VehicleDetailsPage from './pages/VehicleDetailsPage';

function App() {
  return (
    // <BrowserRouter> es el componente principal de React Router
    <BrowserRouter>
      <Routes>
        {/* Página principal (Home) */}
        <Route path="/" element={<HomePage />} />
        
        {/* Rutas para los detalles de vehículos. :id es dinámico */}
        <Route path="/vehiculos/:id" element={<VehicleDetailsPage />} />
        
        {/* Aquí puedes agregar más rutas como /contacto o /servicios */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;