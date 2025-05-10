import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const Quires = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    allCoffee();
  }, []);

  const allCoffee = async () => {
    const { data } = await axios.get("http://localhost:5000/coffee-cafe");
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-3.5">
          {sortedQueries.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quires;
