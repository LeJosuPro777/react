import React from "react";

export const Subtema = ({ titulo, contenido, imagenes }) => {
  return (
    <section className="subtema">
      <div className="subtema-texto">
        <h1>{titulo}</h1>
        <p>{contenido}</p>
      </div>

      <div className="subtema-imagenes">
        {imagenes.map((src, index) => (
          <div className="imagen-container" key={index}>
            <img src={src} alt={`imagen-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};
