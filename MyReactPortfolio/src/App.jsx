import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
      </div>
  );
}

export default App;