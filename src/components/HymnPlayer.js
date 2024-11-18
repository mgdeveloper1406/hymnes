// HymnPlayer.js
import React from 'react';

function HymnPlayer({ audioSrc }) {
  if (!audioSrc) return <p>Audio no disponible.</p>;

  return (
    <audio controls>
      <source src={`http://localhost:5000/audios/${audioSrc}`} type="audio/mp3" />
      Tu navegador no soporta el elemento de audio.
    </audio>
  );
}

export default HymnPlayer;
