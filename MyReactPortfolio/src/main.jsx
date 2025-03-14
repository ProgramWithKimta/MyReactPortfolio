import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Error from './pages/Error.jsx';
import HomePage from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Projects from './pages/Projects.jsx';


const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <Error />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      index: true,
      element: <AboutMe />,
    },
    {
      index: true,
      element: <Projects />,
    },
  ],
},]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
