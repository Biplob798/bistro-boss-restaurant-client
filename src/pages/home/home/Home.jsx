import Banner from "../banner/Banner";
import BistroBoss from "../bistroBoss/BistroBoss";
import CallUs from "../callUs/CallUs";
import Category from "../category/Category";
import Featured from "../featured/Featured";
import PopularMenu from "../popularMenu/PopularMenu";
import Testimonials from "../testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BistroBoss></BistroBoss>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
