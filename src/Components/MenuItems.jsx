import cup from "../assets/cup/coffee-white-SjY7b5HH.png";
import premium from "../assets/cup/icons8-premium-48.png";
import cold from "../assets/cup/icons8-cold-coffee-64.png";
import hot from "../assets/cup/icons8-hot-coffee-64.png";

const MenuItems = () => {
  const bgImage =
    "https://i.ibb.co.com/VdpLfx7/scary-messy-cobweb-meshes-frame-realistic-vector-icon-146706-2194.jpg";

  return (
    <div
      className=" bg-cover object-contain h-full text-white"
      style={{ backgroundImage: `URL(${bgImage})` }}
    >
      <div className="text-center">
        <h1 className="text-black font-dancing pt-[30px] text-5xl font-extrabold">
          Premium Blen Coffee
        </h1>
        <p className="text-gray-400 pt-4">
          Our Premium Blend Coffee offers a perfect harmony of rich flavor and
          smooth aroma. Crafted from the finest beans
        </p>
      </div>
      <div className="lg:flex md:flex justify-evenly">
        <div>
          <img className=" lg:w-[450px] md:w-[250px] " src={cup} alt="" />
        </div>
        <div className="space-y-5 lg:pt-28 md:pt-12 ml-5 *:gap-2 *:text-[#854d3d] *:font-semibold">
          <div className="flex">
            <img className="object-contain w-6 h-6" src={premium} alt="" />
            <h1 className=" text-lg"> Premium Coffee</h1>
          </div>
          <div className="flex">
            <img className="object-contain w-6 h-6" src={cold} alt="" />
            <h1 className=" text-lg"> Cold Coffee</h1>
          </div>
          <div className="flex">
            <img className="object-contain w-6 h-6" src={hot} alt="" />
            <h1 className=" text-lg"> Hot Coffee</h1>
          </div>
        </div>
        <h1 className="w-1 h-48 bg-[#854d3d] mt-16 hidden lg:block"></h1>
        <hr className="text-[#854d3d] my-6 mx-3"></hr>
        <div className="lg:pt-24 md:pt-8 ml-5">
          <h1 className="text-4xl font-dancing font-bold text-[#854d3dc4]">
            Tea Lover
          </h1>
          <p className="text-gray-500 py-1.5">
            Much like writing code, brewing the perfect cup of tea requires
            <br></br>
            patience, precision, and a dash of passion to create<br></br> a
            comforting blend of flavors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
