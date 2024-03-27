import img1 from "../assets/images/banner/1.jpg";
import img2 from "../assets/images/banner/2.jpg";
import img3 from "../assets/images/banner/3.jpg";
import img4 from "../assets/images/banner/4.jpg";

//
//
//
//
//

const Cursol = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 right-10 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-2">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute  h-full flex items-center   bg-gradient-to-r from-black ">
          <div className="space-y-3 w-1/2  text-white p-10 ">
            <h3 className="text-6xl font-bold ">
              Affordable Price For Car Servicing
            </h3>
            <p className="text-sm font-medium ">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-3">
              <button className="btn bg-[#ff3811] border-none hover:bg-[#ff0000]">
                Discover More
              </button>
              <button className="btn btn-ghost border text-white font-semibold border-white hover:border-gray-300">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 right-10 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-2">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute  h-full flex items-center   bg-gradient-to-r from-black ">
          <div className="space-y-3 w-1/2  text-white p-10 ">
            <h3 className="text-6xl font-bold ">
              Affordable Price For Car Servicing
            </h3>
            <p className="text-sm font-medium ">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-3">
              <button className="btn bg-[#ff3811] border-none hover:bg-[#ff0000]">
                Discover More
              </button>
              <button className="btn btn-ghost border text-white font-semibold border-white hover:border-gray-300">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 right-10 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-2">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute  h-full flex items-center   bg-gradient-to-r from-black ">
          <div className="space-y-3 w-1/2  text-white p-10 ">
            <h3 className="text-6xl font-bold ">
              Affordable Price For Car Servicing
            </h3>
            <p className="text-sm font-medium ">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-3">
              <button className="btn bg-[#ff3811] border-none hover:bg-[#ff0000]">
                Discover More
              </button>
              <button className="btn btn-ghost border text-white font-semibold border-white hover:border-gray-300">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 right-10 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-2">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute  h-full flex items-center   bg-gradient-to-r from-black ">
          <div className="space-y-3 w-1/2  text-white p-10 ">
            <h3 className="text-6xl font-bold ">
              Affordable Price For Car Servicing
            </h3>
            <p className="text-sm font-medium ">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-3">
              <button className="btn bg-[#ff3811] border-none hover:bg-[#ff0000]">
                Discover More
              </button>
              <button className="btn btn-ghost border text-white font-semibold border-white hover:border-gray-300">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cursol;
