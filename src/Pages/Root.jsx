import { Outlet } from "react-router-dom";
import Love from "../Components/Love";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader/Loader";
import Footer from "../Components/Share/Footer";
import Navbar from "../Components/Share/Navbar";
import Cursol from "../Components/Cursol";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="h-screen w-screen">
      {isLoading ? <Loader /> : null}
      {!isLoading && (
        <div>
          <Outlet></Outlet>
          <Navbar />
          <Cursol/>
          <Love></Love>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Root;
