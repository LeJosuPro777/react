import React from "react";

export const ArticulosViolados = () => {
  return (
    <section
      style={{
        padding: "2rem 4rem",
        color: "#fefefe",
        lineHeight: "1.7",
        backgroundColor: "#232323",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }} className="articulosviolados">
        Artículos Violados
      </h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "900px" }}>
        La discriminación lingüística vulnera derechos humanos y laborales
        protegidos tanto por la Constitución Mexicana como por tratados
        internacionales. A continuación se listan los principales artículos que
        son transgredidos cuando un trabajador es discriminado por su idioma,
        acento o forma de hablar.
      </p>

      <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
        Constitución Política de los Estados Unidos Mexicanos
      </h2>
      <ul style={{ marginLeft: "2rem", marginBottom: "2rem", fontSize: "1.1rem" }}>
        <li>
          <strong>Artículo 1°:</strong> Prohíbe toda forma de discriminación por
          origen étnico, lengua, género, religión, opiniones o condición social.
        </li>
        <li>
          <strong>Artículo 2°:</strong> Reconoce el derecho de los pueblos
          indígenas a preservar y usar sus lenguas en cualquier ámbito público o
          privado.
        </li>
        <li>
          <strong>Artículo 123°:</strong> Establece que todo trabajador debe
          recibir un trato justo, sin distinción ni exclusión que afecte sus
          oportunidades laborales.
        </li>
      </ul>

      <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
        Ley Federal del Trabajo
      </h2>
      <ul style={{ marginLeft: "2rem", marginBottom: "2rem", fontSize: "1.1rem" }}>
        <li>
          <strong>Artículo 3°:</strong> El trabajo debe realizarse en condiciones
          que aseguren la dignidad del trabajador y prohíban cualquier tipo de
          discriminación.
        </li>
        <li>
          <strong>Artículo 132° Fracción I:</strong> Obliga al patrón a tratar a
          todos los trabajadores con igualdad y respeto, sin distinción por su
          idioma o cultura.
        </li>
        <li>
          <strong>Artículo 133° Fracción I:</strong> Prohíbe a los patrones
          negarse a contratar o despedir a alguien por motivos discriminatorios.
        </li>
      </ul>

      <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
        Instrumentos Internacionales
      </h2>
      <ul style={{ marginLeft: "2rem", fontSize: "1.1rem" }}>
        <li>
          <strong>Convenio 169 de la OIT:</strong> Protege los derechos de los
          pueblos indígenas, garantizando su acceso a la información y al trabajo
          digno en su propia lengua.
        </li>
        <li>
          <strong>Declaración Universal de los Derechos Humanos (Art. 2):</strong>{" "}
          Reconoce el derecho a la igualdad sin distinción de idioma, raza o
          nacionalidad.
        </li>
        <li>
          <strong>Pacto Internacional de Derechos Económicos, Sociales y Culturales
          (Art. 7):</strong> Asegura condiciones justas, equitativas y dignas de
          trabajo para todos los individuos.
        </li>
      </ul>
    </section>
  );
};

