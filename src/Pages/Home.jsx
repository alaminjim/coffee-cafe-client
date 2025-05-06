import Banner from "../Components/Banner";
import MenuItems from "../Components/MenuItems";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <MenuItems></MenuItems>
      </div>
      <div>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
