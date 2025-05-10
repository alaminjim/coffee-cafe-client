import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import MenuItems from "../Components/MenuItems";
import Testimonials from "../Components/Testimonials";
import CoffeeCard from "./CoffeeCard";
import axios from "axios";

const Home = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    allCoffee();
  }, []);

  const allCoffee = async () => {
    const { data } = await axios.get("http://localhost:5000/coffee-cafe");
    setCoffees(data);
  };
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="text-center my-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#854d3d] mb-4">
          Discover and Recommend Your Favorite Coffee Products
        </h1>
        <p className="text-lg text-gray-700">
          Welcome to our community-driven coffee recommendation platform. Here,
          you can explore what others are recommending, share your own
          favorites, and stand up for ethical choices by boycotting specific
          brands. Start your journey by exploring the recommended coffee cards
          below!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-x-48 gap-y-8  space-y-3.5 mt-32 my-20">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            allCoffee={allCoffee}
          ></CoffeeCard>
        ))}
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
