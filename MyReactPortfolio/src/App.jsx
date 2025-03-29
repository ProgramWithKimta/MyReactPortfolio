// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
// import Header from "./components/Header";
// import AboutMe from './pages/AboutMe';
// import Projects from './pages/Projects';
// import Contact from "./pages/Contact";
// import Footer from "./components/Footer";
// import Resume from "./pages/Resume";
// import NavBar from "./components/NavBar";


// function App() {
//   return (
//     <div className="container">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/AboutMe" element={<AboutMe />} />
//         <Route path="/Projects" element={<Projects />} />
//         <Route path="/Contact" element={<Contact />} />
//         <Route path="/Resume" element={<Resume />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container"><NavBar /></div>
  )
}

export default App;