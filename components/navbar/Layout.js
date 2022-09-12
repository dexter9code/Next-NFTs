import NavBar from "./Navbar";

const Layout = function (props) {
  return (
    <>
      <NavBar />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
