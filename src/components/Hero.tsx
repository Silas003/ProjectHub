import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col mt-4 items-center justify-center">
      <h1 className="font-bold text-[2rem]">
        Welcome to University Projects Hub
      </h1>
      <p className="mt-2">
        Explore and showcase your project works to the world!
      </p>

      <Link
        className="bg-primary hover:bg-secondary mt-4 p-4 w-40 rounded-md text-center text-white"
        href="#"
      >
        Upload yours
      </Link>
    </div>
  );
};

export default Hero;
