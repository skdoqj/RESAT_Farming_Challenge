import { Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <h1>header</h1>
      <Outlet />
    </>
  );
}
export default Header;
