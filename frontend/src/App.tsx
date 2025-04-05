import "./App.css";
import ListPersonaComponent from "./components/ListPersonComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonaComponent from "./components/PersonaComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ListPersonaComponent />}></Route>
          <Route path="/personas" element={<ListPersonaComponent />}></Route>
          <Route path="/agregar-persona" element={<PersonaComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
