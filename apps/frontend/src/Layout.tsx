import { Link, useLocation } from 'react-router-dom';
import Header from '@/views/Header.tsx';
import SideNav from './views/SideNav';
import LandingPage from './views/LandingPage';

export default function Layout({ children }: any) {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== '/' ? <SideNav /> : null}
      {pathname !== '/' ? <Header /> : null}
      {/* {pathname === '/' ? <LandingPage /> : null} */}
      <div className="layout">{children}</div>
    </>
  );
}
