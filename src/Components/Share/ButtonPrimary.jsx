import { Link } from "react-router-dom";

const ButtonPrimary = ({ ink,txt }) => {
  return (
    <Link to={ink} className="btn btn-ghost border border-[#ff3811] text-[#ff3811] font-semibold hover:bg-[#ff3811] hover:text-white">
      {txt}
    </Link>
  );
};

export default ButtonPrimary;
