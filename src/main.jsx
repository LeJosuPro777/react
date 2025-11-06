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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <div className="menu">
        <Sidebar />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/casos-historicos" element={<CasosHistoricos />} />
        </Routes>
      </div>
    </Router>
  </StrictMode>
);
