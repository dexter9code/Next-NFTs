import NavBar from "./Navbar";
import Footer from "./../footer/footer";

const Layout = function (props) {
  return (
    <>
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
