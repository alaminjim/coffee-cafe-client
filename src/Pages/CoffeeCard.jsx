import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, allCoffee }) => {
  const { productName, brandName, productImage, title, _id } = coffee;

  const handelDelete = async (_id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      try {
        const { data } = await axios.delete(
          `http://localhost:5000/coffee-cafe/${_id}`
        );
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });

          allCoffee(); // reload or fetch again
        }
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "Some Went Wrong",
          icon: "error",
          confirmButtonText: "Cool",
        });
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="card bg-base-100 w-96 shadow-sm ">
        <figure>
          <img src={productImage} alt={productName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {productName}
            <div className="badge bg-[#854d3d9c] text-amber-100">
              {brandName}
            </div>
          </h2>
          <p>{title}</p>
          <div className="card-actions justify-end">
            <Link to={`/update/${_id}`}>
              <div className="badge btn border-[1px] border-[#85683d9a] text-[#854d3daf] hover:bg-[#854d3d] hover:text-amber-100">
                Update
              </div>
            </Link>
            <Link to={`/details/${_id}`}>
              <div className="badge btn bg-[#854d3d] text-amber-100 hover:border-[#85683d9a] hover:bg-base-200 hover:text-[#854d3daf] border-[1px]">
                Details
              </div>
            </Link>
            <div
              onClick={() => handelDelete(_id)}
              className="badge btn border-[1px] border-[#85683d9a] text-[#854d3daf] hover:bg-[#854d3d] hover:text-amber-100"
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
