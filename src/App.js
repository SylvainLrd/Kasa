import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'
import About from './pages/About'
import PropertyDetails from './pages/PropertyDetails' // Page pour les détails d'un logement
import NotFound from './pages/NotFound'
import Footer from './components/Footer';
import './style/App.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property/:id" element={<PropertyDetails />} /> {/* Route pour afficher un logement spécifique */}
        <Route path="*" element={<NotFound />} /> {/* Page 404 */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
