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

  console.log(coffees);

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
          {coffees.map((coffee) => (
            <CoffeeCard coffee={coffee}></CoffeeCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quires;
