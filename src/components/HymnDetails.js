// HymnDetails.js
import React from 'react';
import HymnPlayer from './HymnPlayer';

function HymnDetails({ hymn, onBack, toggleFavorites, favorites }) {
  if (!hymn) {
    return <p>Veuillez sélectionner un chant pour voir les détails.</p>;
  }

  const formatLyrics = (lyrics) => {
    return lyrics.split(/\n(?=\d+\s)/).map((estrofa, index) => (
      <p key={index} style={{ marginBottom: '10px', textAlign: 'left' }}>
        {estrofa}
      </p>
    ));
  };

  const isFavorites = favorites.some(fav => fav.numero === hymn.numero);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>{hymn.numero} - {hymn.titulo || "Sans Titre"}</h2>
      <div>{formatLyrics(hymn.letra)}</div>

      <HymnPlayer audioSrc={`${hymn.numero}.mp3`} />

      {/* Botón para agregar/eliminar de favoritos */}
      <button
        onClick={() => toggleFavorites(hymn)}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: isFavorites ? 'red' : '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginRight: '10px',
        }}
      >
        {isFavorites ? "Supprimer des Favoris" : "Ajouter aux Favoris"}
      </button>

      <button
        onClick={onBack}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: 'gray',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Retour
      </button>
    </div>
  );
}

export default HymnDetails;
