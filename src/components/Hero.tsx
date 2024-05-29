import Navbar from "@/components/Navbar";

const Hero = () => {
  return (
    <div className="bg-[url('/images/hero-bg.jpg')] bg-cover">
      <Navbar />
      <div className="flex flex-col items-center h-screen justify-center text-center text-white p-8 ">
        <h1 className="font-bold text-[2rem]">
          Welcome to University Projects Hub
        </h1>
        <p className="mt-2">
          Explore and showcase your project works to the world!
        </p>

        <div className="mt-4">
          <input
            placeholder="Search Projects"
            className="p-2 shadow-md rounded-md"
          />
          <button className="text-white bg-primary hover:bg-secondary p-2 w-24 ml-2 rounded-md">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
