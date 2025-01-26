import { Link, useLocation } from 'react-router-dom';
import Header from '@/views/Header.tsx';

export default function Layout({ children }: any) {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== '/' ? <Header /> : null}
      <div>{children}</div>
    </>
  );
}
