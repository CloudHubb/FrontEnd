import { Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header>헤더</header>
      <Outlet />
    </>
  );
}
