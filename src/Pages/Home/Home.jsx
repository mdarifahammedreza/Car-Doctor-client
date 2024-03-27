import Cursol from "../../Components/Cursol";
import Navbar from "../../Components/Share/Navbar";
import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
import ButtonPrimary from "../../Components/Share/ButtonPrimary";
const Home = () => {
  return (
    <div className="mx-10">
      <Navbar />
      <Cursol />
      <Experincefild />
    </div>
  );
};

export default Home;

const Experincefild = () => {
  return (
    <div className="flex items-center w-full mt-10 border">
      <div className="w-1/2 p-16  ">
        <div className="relative">
          <img src={person} alt="image" />
          <img
            className="absolute w-1/2 -bottom-12 -right-20 border-white border-8"
            src={parts}
            alt="Image"
          />
        </div>
      </div>
      <div className="w-1/2 relative ml-10 p-8 space-y-4">
        <h3 className="font-bold text-orange-600 ">About Us</h3>
        <h1 className="font-bold text-3xl">
          We are qualified & of experience in this field
        </h1>
        <p className="font-light text-sm">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <p className="font-light text-sm m">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <button className="btn bg-[#ff3811] hover:bg-[#ff0000] text-white border-none">Get More Info</button>
      </div>
    </div>
  );
};
