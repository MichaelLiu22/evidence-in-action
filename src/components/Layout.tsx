import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigation from './Navigation';

const Layout = () => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className={`page-transition-container ${isAnimating ? 'page-enter' : ''}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
