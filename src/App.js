// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdvancedSearch from './components/AdvancedSearch';
import HymnDetails from './components/HymnDetails';
import Favorites from './components/Favorites'; // Ajuste aquí
import './App.css';

function App() {
  const [hymns, setHymns] = useState([]);
  const [selectedHymn, setSelectedHymn] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/hymns')
      .then(response => setHymns(response.data))
      .catch(error => console.error('Error al cargar la lista de himnos:', error));
  }, []);

  const handleSearch = (term) => {
    const searchTerm = term.toLowerCase();
  
    // Si el término es un número, busca por número
    const hymnByNumber = hymns.find((h) => String(h.numero) === searchTerm);
  
    // Si no es un número, busca por palabra clave en título o letra
    const hymnsByKeyword = hymns.filter(
      (h) =>
        h.titulo?.toLowerCase().includes(searchTerm) ||
        h.letra?.toLowerCase().includes(searchTerm)
    );
  
    if (hymnByNumber) {
      setSelectedHymn(hymnByNumber);
    } else if (hymnsByKeyword.length > 0) {
      // Si hay varios resultados, muestra el primero por ahora (puedes expandir esta lógica)
      setSelectedHymn(hymnsByKeyword[0]);
    } else {
      alert('Aucun chant trouvé avec le numéro ou le mot clé fourni.');
    }
  };
  

  const handleBack = () => {
    setSelectedHymn(null);
  };

  const toggleFavorites = (hymn) => {
    const alreadyFavorite = favorites.some(fav => fav.numero === hymn.numero);
    if (alreadyFavorite) {
      setFavorites(favorites.filter(fav => fav.numero !== hymn.numero));
    } else {
      setFavorites([...favorites, hymn]);
    }
  };

  const selectHymn = (hymn) => {
    setSelectedHymn(hymn);
  };

  return (
    <div className="app-container">
      <h1>Hymnes et Louanges</h1>
      {selectedHymn ? (
        <HymnDetails
          hymn={selectedHymn}
          onBack={handleBack}
          toggleFavorites={toggleFavorites}
          favorites={favorites}
        />
      ) : (
        <>
          <AdvancedSearch onSearch={handleSearch} />
          <Favorites favorites={favorites} selectHymn={selectHymn} />
          <p>Entrez un numéro de chant et appuyez sur "Rechercher" pour voir les détails.</p>
        </>
      )}
    </div>
  );
}

export default App;
