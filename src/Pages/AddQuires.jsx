import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthContext from "../Context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const AddQuires = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());

  const handelAdd = async (e) => {
    e.preventDefault();

    const form = e.target;
    const productName = form.productName.value;
    const brandName = form.brand.value;
    const productImage = form.image.value;
    const title = form.title.value;
    const reason = form.reason.value;
    const userInfo = {
      email: user?.email,
      name: user?.displayName,
      photo: user?.photoURL,
    };
    const currentDate = startDate;

    const products = {
      productName,
      brandName,
      productImage,
      title,
      reason,
      userInfo,
      currentDate,
      recommendationCount: 0,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/coffee-cafe",
        products
      );
      if (data.insertedId) {
        form.reset();
        toast.success("data added successful");
      }
    } catch {
      const err = err.message;
      toast.error(err);
    }
  };

  return (
    <div>
      <div className="w-full  h-full bg-[#854d3d3d] rounded-md my-20">
        <h1 className="text-2xl text-center font-semibold pt-6 text-[#854d3d]">
          ADD YOUR PRODUCTS RECOMMENDATION SYSTEM...!
        </h1>
        <form onSubmit={handelAdd}>
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
              />
            </div>
            <div className="space-y-1">
              <label className="fieldset-label pl-1 font-bold">Title</label>
              <input
                className="lg:w-[380px] w-full  h-[43px] rounded-xl border-2 border-[#854d3d] px-3  placeholder:font-semibold"
                type="text"
                name="title"
                placeholder="Title"
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
              />
            </div>
          </div>
          <div className="flex-col gap-2 hidden">
            <label className="text-gray-700">Date</label>

            {/* Date Picker Input Field */}
            <DatePicker
              className="border p-2 rounded-md"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <button className="btn lg:w-[795px] lg:ml-[549px] w-full mb-8 mt-9 bg-[#854d3db6] text-white">
            Add Products
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddQuires;
