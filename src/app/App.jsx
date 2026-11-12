import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../ui/Layout";
import Home from "../pages/Home";
const Services = lazy(() => import("../pages/Services"));
const ServiceDetail = lazy(() => import("../pages/ServiceDetail"));
const About = lazy(() => import("../pages/About"));
const Contacts = lazy(() => import("../pages/Contacts"));
const NotFound = lazy(() => import("../pages/NotFound"));
export default function App() {
  return (
    <Suspense
      fallback={
        <div
          className="page-loading"
          role="status"
          aria-label="Great Steppe Logistics"
        >
          <span className="spinner" />
        </div>
      }
    >
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
