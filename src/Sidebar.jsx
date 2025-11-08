import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <div className="logo-content">
        <img
          src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_4_3_1200x900/public/field_blog_entry_teaser_image/2018-09/the_best_way_to_find_balance_in_life.jpg?itok=lisuqz15"
          alt=""
        />
      </div>
      <div className="menu-content">
        <Link to="/">
          <h3>INICIO</h3>
        </Link>
        <Link to="/casos-historicos">
          <h3>CASOS HISTORICOS</h3>
        </Link>
        <Link to="/articulos-violados">
          <h3>ARTICULOS VIOLADOS</h3>
        </Link>
        <Link to="/derechos-trabajador">
          <h3>DERECHOS DEL TRABAJADOR</h3>
        </Link>
        <Link to="/zonas-riesgo">
          <h3>ZONAS DE RIESGO</h3>
        </Link>
      </div>
      
    </>
  );
};
