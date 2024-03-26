import { Link } from "react-router-dom";

const ButtonPrimary = ({ text }) => {
  return (
    <Link
      to={text}
      className="btn btn-ghost border border-[#ff3811] text-[#ff3811] font-semibold hover:bg-[#ff3811] hover:text-white">
      {text}
    </Link>
  );
};

export default ButtonPrimary;
