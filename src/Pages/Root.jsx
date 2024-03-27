import { Outlet } from "react-router-dom";
import Love from "../Components/Love";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader/Loader";
import Footer from "../Components/Share/Footer";
import Navbar from "../Components/Share/Navbar";
import Cursol from "../Components/Cursol";
import ProductCard from "../Components/Cards/ProductCard";
import ServiceCard from "../Components/Cards/ServiceCard";
import Black from "./Home/Black";
import MIddleText from "./Home/MIddleText";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="mx-10">
      {isLoading ? <Loader /> : null}
      {!isLoading && (
        <div>
          <Outlet></Outlet>
        </div>
      )}
    </div>
  );
};

export default Root;
