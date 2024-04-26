import img1 from "../../assets/images/services/1.jpg";
import { FaArrowRight } from "react-icons/fa";
const ServiceCard = () => {
  return (
    <div className="w-96 h-96 border p-8 rounded-xl shadow-md">
      <img className="rounded-xl" src={img1} alt="hg" />
      <h2 className="card-title mt-8">Electrical System</h2>
      <div className="flex justify-between items-center text-red-600">
        <p className=" text-sm font-semibold">Price:${"20.00"}</p>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default ServiceCard;
