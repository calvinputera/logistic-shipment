import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Success from "./pages/Success";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
