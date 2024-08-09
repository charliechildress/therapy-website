import { Home, About, Resources, Contact } from "./screens";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Navbar active={"Home"}></Navbar> <Home />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <Navbar active={"About"}></Navbar> <About />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <Navbar active={"Contact"}></Navbar> <Contact />
            </div>
          }
        />
        <Route
          path="/resources"
          element={
            <div>
              <Navbar active={"Resources"}></Navbar> <Resources />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
