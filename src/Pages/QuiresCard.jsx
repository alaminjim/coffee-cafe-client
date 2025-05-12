import axios from "axios";
import { Link } from "react-router-dom";

const QuiresCard = ({ coffee, allCoffee, showRecommendation }) => {
  const {
    productName,
    brandName,
    productImage,
    title,
    _id,
    recommendationCount,
  } = coffee;

  const handelRecommend = async (id) => {
    try {
      await axios.patch(
        `https://coffee-cafe-server-qurnff92x-alaminjims-projects.vercel.app/recommend/${id}`
      );
      allCoffee();
    } catch (error) {
      console.error("Failed to recommend:", error);
    }
  };

  return (
    <div>
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
              {showRecommendation && (
                <>
                  <p className="text-sm font-semibold text-[#854d3d]">
                    Recommended: {recommendationCount || 0} times
                  </p>
                  <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}>
                      <div
                        onClick={() => handelRecommend(_id)}
                        className="badge btn bg-[#854d3d] text-amber-100 hover:border-[#85683d9a] hover:bg-base-200 hover:text-[#854d3daf] border-[1px]"
                      >
                        Recommend
                      </div>
                    </Link>
                  </div>
                </>
              )}
              <div className="badge btn border-[1px] border-[#85683d9a] text-[#854d3daf] hover:bg-[#854d3d] hover:text-amber-100">
                Delete
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuiresCard;
