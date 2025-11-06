// VerticalInfiniteCarousel.jsx
import React from "react";
import "./VerticalInfiniteCarousel.css";
function VerticalInfiniteCarousel({
  images = [
    "https://cedhmx.org/wp-content/uploads/2020/02/fa41c-stock-largo.png?w=1568",
    "https://mrjustice.com/wp-content/uploads/2024/01/iStock-1480313855-1024x683.jpg",
    "https://www.sdpnoticias.com/resizer/v2/UDEJPYML4ZOZNMFNCP5MG3DZMI.png?smart=true&auth=a8336f93fb078d0ac7b9794291a81af56fed8696ee83ed9f486d95a1834ee552&width=640&height=360",
    "https://laligadefensora.com/wp-content/uploads/2024/11/employer_yelling-1.png"
  ],

  duration = "18s",
  itemHeight = "200px",
}) {
  const loopItems = [...images, ...images];

  return (
    <div
      className="vin-viewport"
      style={{
        ["--vin-duration"]: duration,
        ["--vin-item-height"]: itemHeight,
      }}
      aria-hidden={images.length === 0}
    >
      <div className="vin-track">
        {loopItems.map((src, i) => (
          <div className="vin-item" key={i}>
            <img src={src} alt={`carrusel-${i % images.length}`} />
            <span className="vin-caption">
              {i % images.length === 0 ? "" : ""} {/* optional caption hook */}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export const Home = () => {
  return (
    <div className="home-container">
      <section className="left-content">
        <h1>Diversidad Lingüística e Injusticia Laboral</h1>
        {/* <p>
          En México, miles de hablantes de lenguas indígenas enfrentan condiciones laborales injustas,
          reflejo de desigualdad estructural y falta de protección. Este espacio busca visibilizar esas
          problemáticas y promover la valoración de nuestra diversidad cultural y lingüística.
        </p> */}
      </section>

      <section className="right-carousel">
        <VerticalInfiniteCarousel />
      </section>
    </div>
  );
};