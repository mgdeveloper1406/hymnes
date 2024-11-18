// Favorites.js
import React from 'react';

function Favorites({ favorites, selectHymn }) {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h3 style={{ 
        color: '#FFFFFF', 
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', 
        marginBottom: '15px' 
      }}>
        Vos Chants Favoris
      </h3>
      <ul style={{ 
        listStyle: 'none', 
        padding: 0, 
        color: '#FFFFFF', 
        fontSize: '18px', 
        lineHeight: '1.8',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)' 
      }}>
        {favorites.map(hymn => (
          <li key={hymn.numero} style={{ marginBottom: '10px' }}>
            <button
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#ADD8E6', // Azul claro
                cursor: 'pointer',
                textDecoration: 'underline',
                fontSize: '18px',
              }}
              onClick={() => selectHymn(hymn)}
            >
              {hymn.numero} - {hymn.titulo || "Sans Titre"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
