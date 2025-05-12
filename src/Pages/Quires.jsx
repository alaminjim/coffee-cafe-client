import axios from "axios";
import { useEffect, useState } from "react";
import QuiresCard from "./QuiresCard";

const Quires = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-48 gap-y-8 max-w-6xl mx-auto">
        {sortedQueries.map((coffee) => (
          <QuiresCard
            key={coffee._id}
            coffee={coffee}
            allCoffee={allCoffee}
            showRecommendation={true}
          ></QuiresCard>
        ))}
      </div>
    </div>
  );
};

export default Quires;
