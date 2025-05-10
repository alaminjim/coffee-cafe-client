import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoffeeDetails = () => {
  const { id } = useParams();
  const [coffees, setCoffees] = useState({});

  useEffect(() => {
    allCoffee();
  }, []);

  const allCoffee = async () => {
    const { data } = await axios.get(`http://localhost:5000/coffee-cafe/${id}`);
    setCoffees(data);
  };

  const { productName, brandName, productImage, title, reason } = coffees;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-base-200 min-h-screen">
        <div className="flex-col">
          <div className="m-5">
            <img
              src={productImage}
              className="w-full object-contain rounded-lg shadow-2xl"
            />
          </div>
          <div className="pl-6">
            <h1 className="text-4xl my-3 text-[#854d3d] font-bold">
              {productName}
            </h1>
            <h1 className="text-2xl my-3 text-[#854d3d] font-bold">
              {brandName}
            </h1>
            <p className="py-2">{title}</p>
            <p className="py-5 text-lg text-gray-500">
              Boycotting Reason:{" "}
              <span className="text-[#854d3d]">{reason}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
