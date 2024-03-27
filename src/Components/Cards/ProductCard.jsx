import img1 from "../../assets/images/products/1.png";

const ProductCard = () => {
  return (
    <div className="w-96 h-96 border flex flex-col items-center justify-center p-8 rounded-xl shadow-md text-center">
      <img className="rounded-xl h-3/4 w-3/4" src={img1} alt="hg" />
      <div className="rating rating-xs">
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
          checked
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
      <h2 className="font-bold text-xl mt-2">Electrical System</h2>
      <p className=" text-sm font-semibold text-red-600">Price:${"20.00"}</p>
    </div>
  );
};

export default ProductCard;
