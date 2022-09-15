import Home from "./../components/home/Home";
import SubHome from "./../components/home/SubHome";
import AboutHome from "./../components/home/AboutHome";
import FeaturedArt from "./../components/home/FeaturedArt";
import Loop from "../components/home/Loop";

export default function StartingPage() {
  return (
    <>
      <div>
        <Home />
        <SubHome />
        <AboutHome />
        <FeaturedArt />
        <Loop />
      </div>
    </>
  );
}
