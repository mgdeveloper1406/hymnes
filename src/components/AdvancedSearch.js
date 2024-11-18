import React, { useState } from 'react';

function AdvancedSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      alert('Veuillez entrer un numéro ou un mot clé.');
      return;
    }
    onSearch(searchTerm.trim());
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h2 style={{ marginBottom: '10px' }}>Recherche de Chant par Numéro ou Mot</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Entrez le numéro ou un mot clé"
        style={{
          padding: '10px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          width: '70%',
          marginBottom: '10px',
        }}
      />
      <br />
      <button
        onClick={handleSearch}
        style={{
          backgroundColor: '#007BFF',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '5px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Rechercher
      </button>
    </div>
  );
}

export default AdvancedSearch;
