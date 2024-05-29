"use client";
import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { label: "Featured projects", href: "#featured" },
    { label: "Recent projects", href: "#recent" }
  ];

  const scrollToView = (id: string) => {
    const section = document.querySelector(id)!;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className=" mr-4 ml-4 flex justify-between items-center text-white">
      <span>Project Hub Logo </span>

      <div className="flex items-center">
        <div>
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollToView(href)}
              className="mr-4 p-2"
            >
              {label}
            </button>
          ))}
        </div>
        <Link
          className="bg-primary hover:bg-secondary mt-4 p-2 w-40 rounded-md text-center text-white"
          href="#"
        >
          Upload yours
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
