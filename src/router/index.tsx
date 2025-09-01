import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import ClinicalService from '../pages/ClinicalService';
import Research from '../pages/Research';
import Projects from '../pages/Projects';
import Leadership from '../pages/Leadership';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'clinical-service',
        element: <ClinicalService />,
      },
      {
        path: 'research',
        element: <Research />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'leadership',
        element: <Leadership />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
