import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <Outlet />
      <footer>
        <p>Author: rfoggo</p>
        <p><a href="mailto:hege@example.com">hege@example.com</a></p>
      </footer>
    </>
  )
};

export default Layout;
