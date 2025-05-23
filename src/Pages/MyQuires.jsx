import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const MyQuires = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    allCoffee();
  }, []);

  const allCoffee = async () => {
    const { data } = await axios.get(
      "https://coffee-cafe-server-qurnff92x-alaminjims-projects.vercel.app/coffee-cafe"
    );
    setCoffees(data);
  };

  const sortedQueries = [...coffees].sort(
    (a, b) => new Date(b.currentDate) - new Date(a.currentDate)
  );

  return (
    <div>
      {coffees.length === 0 ? (
        <div className="text-center">
          <Link to="/add-quires">
            <button className="btn bg-[#854d3dea] text-amber-100">
              Add Quires
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-x-48 gap-y-8 ">
            {sortedQueries.map((coffee) => (
              <CoffeeCard
                key={coffee._id}
                coffee={coffee}
                allCoffee={allCoffee}
              ></CoffeeCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyQuires;
