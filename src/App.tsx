import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Rooms from "./pages/Rooms/Rooms";
import Contact from "./pages/Contact/Contact";
import SingleRoom from "./pages/SingleRoom/SingleRoom";

function App() {
  return (
    <main>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rooms/:roomId" element={<SingleRoom />} />
      </Routes>
    </main>
  );
}

export default App;
