import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./Home.jsx";
import { Sidebar } from "./Sidebar.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { CasosHistoricos } from "./CasosHistoricos.jsx";
import { Subtema } from "./Subtema.jsx";
import { ArticulosViolados } from "./ArticulosViolados.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <div className="menu">
        <Sidebar />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/casos-historicos"
            element={
              <Subtema
                titulo="Casos Históricos"
                contenido="A lo largo del tiempo, miles de trabajadores han sufrido injusticias por su lengua materna o acento. En México, comunidades indígenas como los mixtecos y tzotziles han sido rechazadas en empleos urbanos por no dominar completamente el español. En Estados Unidos, durante el siglo XX, empleados latinos fueron despedidos por hablar español en su lugar de trabajo, lo que llevó a demandas que marcaron precedentes en la legislación laboral. También se documentan casos en Europa donde migrantes africanos o del este fueron excluidos de procesos de contratación por su acento o limitada competencia lingüística. Estos casos muestran cómo la diversidad lingüística fue usada como mecanismo de exclusión y no como una riqueza cultural."
                imagenes={[
                  "https://www.gob.mx/cms/uploads/article/main_image/84437/08ago19-foro-pueblos-indigenas-afrodescendientes-21.jpg",
                  "https://www.conavalsi.com/_Uploads/Noticias/Cabecera/tipos_despidos_laborales.jpg",
                  "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/FEB1/production/_99010256_gettyimages-810680708.jpg.webp",
                ]}
              />
            }
          />
          <Route
            path="/articulos-violados"
            element={
              <ArticulosViolados />
            }
          />
          <Route
            path="/derechos-trabajador"
            element={
              <Subtema
                titulo="Derechos del Trabajador"
                contenido="Todo trabajador, sin importar su idioma o origen, tiene derecho a condiciones de trabajo equitativas y al respeto de su dignidad. Los derechos fundamentales incluyen la igualdad de oportunidades, la no discriminación, la libertad de expresión y el acceso a la capacitación laboral. En contextos multilingües, las empresas deben garantizar que la comunicación interna y la señalización sean accesibles a todos los empleados, evitando que la lengua se convierta en una barrera. Además, los trabajadores tienen derecho a recibir información sobre sus funciones y riesgos laborales en su propio idioma, para asegurar su comprensión y bienestar."
                imagenes={[
                  "https://saposyprincesas.elmundo.es/assets/2022/08/multilingue.jpg",
                  "https://twind.io/co/wp-content/uploads/2023/06/riesgos-laborales-1024x538.webp",
                  "https://cdn.forbes.com.mx/2023/11/trabajadores-salario-minimo.webp",
                ]}
              />
            }
          />
          <Route
            path="/zonas-riesgo"
            element={
              <Subtema
                titulo="Zonas de Riesgo Laboral"
                contenido="Las zonas con mayor riesgo de injusticia lingüística suelen coincidir con regiones donde existe diversidad cultural o alta presencia de comunidades indígenas y migrantes. En México, estados como Oaxaca, Chiapas y Guerrero concentran casos donde la falta de traductores o de información en lenguas originarias ha derivado en accidentes o despidos injustificados. En el norte del país, trabajadores migrantes enfrentan exclusión por su acento o por no dominar el español técnico. Este fenómeno también ocurre en sectores como la construcción, la agricultura y la manufactura, donde la falta de comprensión de las normas de seguridad genera vulnerabilidad y explotación."
                imagenes={[
                  "https://randomtrip.es/wp-content/uploads/2025/03/oaxaca-calle-5.jpg",
                  "https://blob.cuartopoder.mx/images/2022/02/27/b11-1.jpg",
                  "https://cdn.biodiversidadla.org/var/biodiversidadla_org/storage/images/documentos/agricultura-tradicional-y-economia-campesina-una-persistencia-desde-lo-local/1306468-1-esl-ES/Agricultura-tradicional-y-economia-campesina-una-persistencia-desde-lo-local_full.jpg",
                ]}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  </StrictMode>
);
