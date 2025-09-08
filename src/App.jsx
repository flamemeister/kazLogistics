import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import './i18n';
import i18n from "./i18n";

console.log("Current language:", i18n.language);
console.log("Home label:", i18n.t("nav.home"));

import { 
  Navbar,
  Home,
  Loader,

  About,
  // Gallery,
  Contacts,
  Services,
  NotFound,

  AviaServices,
  AutoServices,
  RailServices,
  ContainerServices,
  MultimodalServices,
  NonhabaryteServices,
  ProjectiveServices,
  
} from "./components";

const App = () => {
  return (
    <>
      <AppContent />
    </>
  );
}

const AppContent = () => {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Start loader
    // setShowLoader(true);
  }, [location]);

  // Callback from the loader once 100% is reached
  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  return (
    <>
      {/* Show loader if `showLoader` is true */}
      {showLoader && <Loader onComplete={handleLoaderComplete} />}

      {/* Your normal app routes */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/services/example" element={<AutoServices />} /> */}
        <Route path="/services/air" element={<AviaServices />} />
        <Route path="/services/auto" element={<AutoServices />} />
        <Route path="/services/railway" element={<RailServices />} />
        <Route path="/services/container" element={<ContainerServices />} />
        <Route path="/services/multimodal" element={<MultimodalServices />} />
        <Route path="/services/oversized" element={<NonhabaryteServices />} />
        <Route path="/services/containerdepot" element={<ProjectiveServices />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}


export default App;