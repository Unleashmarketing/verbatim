import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

import Landing from "./routes/index";
import SuetterlinUebersetzen from "./routes/suetterlin-uebersetzen";
import KurrentLesen from "./routes/kurrent-lesen";
import UrkundenTranskribieren from "./routes/urkunden-transkribieren-ki";
import ErbenermittlerSoftware from "./routes/erbenermittler-software";
import AGB from "./routes/agb";
import Datenschutz from "./routes/datenschutz";
import Impressum from "./routes/impressum";
import Support from "./routes/support";
import ScrollToTop from "./components/ScrollToTop";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/suetterlin-uebersetzen" element={<SuetterlinUebersetzen />} />
        <Route path="/kurrent-lesen" element={<KurrentLesen />} />
        <Route path="/urkunden-transkribieren-ki" element={<UrkundenTranskribieren />} />
        <Route path="/erbenermittler-software" element={<ErbenermittlerSoftware />} />
        <Route path="/agb" element={<AGB />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
