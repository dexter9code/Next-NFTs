import Home from "./../components/home/Home";
import SubHome from "./../components/home/SubHome";
import AboutHome from "./../components/home/AboutHome";
import FeaturedArt from "./../components/home/FeaturedArt";

export default function StartingPage() {
  return (
    <div>
      <Home />
      <SubHome />
      <AboutHome />
      <FeaturedArt />
    </div>
  );
}
