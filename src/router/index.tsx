import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Academic from '../pages/Academic';
import Research from '../pages/Research';
import Teaching from '../pages/Teaching';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Academic />,
      },
      {
        path: 'research',
        element: <Research />,
      },
      {
        path: 'leadership',
        element: <Teaching />,
      },
      {
        path: 'projects',
        element: <Projects />,
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
