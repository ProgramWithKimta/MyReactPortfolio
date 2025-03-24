// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>My React Portfolio</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';


function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
}

export default App;

// function App() {
//   return (
//     <Router>
//       <div>
//         <NavTabs />
//         <div>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/resume" element={<Resume />} />
//             <Route path="/portfolio" element={<Portfolio />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }
 
// export default App;