import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Index from '../pages/Index';
import Academic from '../pages/Academic';
import Research from '../pages/Research';
import Teaching from '../pages/Teaching';
import Projects from '../pages/Projects';
import Notes from '../pages/Notes';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'academic',
        element: <Academic />,
      },
      {
        path: 'research',
        element: <Research />,
      },
      {
        path: 'teaching',
        element: <Teaching />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'notes',
        element: <Notes />,
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
