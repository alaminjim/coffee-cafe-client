const CoffeeCard = ({ coffee }) => {
  const { productName, brandName, productImage, title, reason } = coffee;

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
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
