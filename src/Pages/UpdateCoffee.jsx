import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCoffee = () => {
  const { id } = useParams();
  const [coffees, setCoffees] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    allCoffee();
  }, []);

  const allCoffee = async () => {
    const { data } = await axios.get(
      `https://coffee-cafe-server-qurnff92x-alaminjims-projects.vercel.app/coffee-cafe/${id}`
    );
    setCoffees(data);
  };

  const handelUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;
    const productName = form.productName.value;
    const brandName = form.brand.value;
    const productImage = form.image.value;
    const title = form.title.value;
    const reason = form.reason.value;

    const updateProducts = {
      productName,
      brandName,
      productImage,
      title,
      reason,
      recommendationCount: coffees.recommendationCount,
    };

    try {
      const { data } = await axios.patch(
        `https://coffee-cafe-server-qurnff92x-alaminjims-projects.vercel.app/coffee-cafe/${id}`,
        updateProducts
      );
      if (data.modifiedCount > 0) {
        toast.success("Update Successful");
        navigate("/quires");
      }
    } catch {
      toast.error("something went wrong");
    }
  };

  return (
    <div>
      <div className="w-full  h-full bg-[#854d3d3d] rounded-md my-20">
        <h1 className="text-2xl text-center font-semibold pt-6 text-[#854d3d]">
          Update YOUR PRODUCTS RECOMMENDATION SYSTEM...!
        </h1>
        <form onSubmit={handelUpdate}>
          <div className="lg:flex justify-center items-center gap-8 space-y-2 mt-10">
            <div className="space-y-1 pt-2">
              <label className="fieldset-label pl-1 font-bold">
                Product Name
              </label>
              <input
                className="lg:w-[380px] w-full h-[43px]  rounded-xl border-2 border-[#854d3d] px-3  placeholder:font-semibold"
                type="text"
                name="productName"
                placeholder="Product Name"
                defaultValue={coffees.productName}
              />
            </div>
            <div className="space-y-1">
              <label className="fieldset-label pl-1 font-bold">
                Product Brand
              </label>
              <input
                className="lg:w-[380px] w-full  h-[43px] rounded-xl border-2 border-[#854d3d] px-3  placeholder:font-semibold"
                type="text"
                name="brand"
                placeholder="Product Brand"
                defaultValue={coffees.brandName}
              />
            </div>
          </div>
          <div className="lg:flex justify-center items-center space-y-2 gap-8 lg:mt-5">
            <div className="space-y-1 pt-1.5">
              <label className="fieldset-label pl-1 font-bold">
                Product Image-URL
              </label>
              <input
                className="lg:w-[380px] w-full h-[43px] rounded-xl border-2 border-[#854d3d] px-3  placeholder:font-semibold"
                type="url"
                name="image"
                placeholder="Image-URL"
                defaultValue={coffees.productImage}
              />
            </div>
            <div className="space-y-1">
              <label className="fieldset-label pl-1 font-bold">Title</label>
              <input
                className="lg:w-[380px] w-full  h-[43px] rounded-xl border-2 border-[#854d3d] px-3  placeholder:font-semibold"
                type="text"
                name="title"
                placeholder="Title"
                defaultValue={coffees.title}
              />
            </div>
          </div>
          <div className="lg:flex justify-center items-center pt-1.5 lg:pr-[410px] space-y-2 gap-8 lg:mt-5">
            <div className="space-y-1">
              <label className="fieldset-label pl-1 font-bold">
                Boycotting Reason
              </label>
              <input
                className="lg:w-[380px] w-full  h-[43px] rounded-xl border-2 border-[#854d3d] px-3  placeholder:font-semibold"
                type="text"
                name="reason"
                placeholder="Boycotting Reason"
                defaultValue={coffees.reason}
              />
            </div>
          </div>
          <button className="btn lg:w-[795px] lg:ml-[549px] w-full mb-8 mt-9 bg-[#854d3db6] text-white">
            Update Products
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
