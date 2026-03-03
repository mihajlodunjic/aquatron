import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SiteLayout } from "@/components/site/SiteLayout";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import DevicesPage from "@/pages/DevicesPage";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import ServicesPage from "@/pages/ServicesPage";
import WaterDeliveryPage from "@/pages/WaterDeliveryPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<SiteLayout />}>
        <Route element={<Index />} path="/" />
        <Route element={<ServicesPage />} path="/usluge" />
        <Route element={<DevicesPage />} path="/aparati" />
        <Route element={<WaterDeliveryPage />} path="/dostava-vode" />
        <Route element={<AboutPage />} path="/o-nama" />
        <Route element={<ContactPage />} path="/kontakt" />
        <Route element={<NotFound />} path="*" />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
