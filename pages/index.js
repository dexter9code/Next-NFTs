import Home from "./../components/home/Home";
import SubHome from "./../components/home/SubHome";
import AboutHome from "./../components/home/AboutHome";
import FeaturedArt from "./../components/home/FeaturedArt";
import Loop from "../components/home/Loop";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function StartingPage() {
  const notify = (message) => {
    toast(message);
  };
  return (
    <>
      <div>
        <Home />
        <SubHome />
        <AboutHome />
        <FeaturedArt />
        <Loop notification={notify} />
      </div>
      <ToastContainer />
    </>
  );
}
