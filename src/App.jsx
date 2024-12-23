import { Route, Routes } from "react-router-dom";

import { 
  Navbar,
  Main,
  About,
  Gallery,
  Contacts,
  NotFound 
} from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;