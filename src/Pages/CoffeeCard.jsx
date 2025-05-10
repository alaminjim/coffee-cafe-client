const CoffeeCard = ({ coffee }) => {
  const { productName, brandName, productImage, title, reason } = coffee;

  return <div>coffee: {productName} </div>;
};

export default CoffeeCard;
