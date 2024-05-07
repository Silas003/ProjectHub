import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { label: "Final year projects", href: "/fyp" },
    { label: "Mini projects", href: "/mp" }
  ];

  return (
    <div className="flex justify-between items-center  p-6 shadow-md ">
      <span>Project Hub </span>

      <div className="flex items-center">
        <div>
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} className="mr-4">
              {label}
            </Link>
          ))}
        </div>

        <div>
          <input
            placeholder="Search Projects"
            className="p-2 outline-none shadow-md"
          />
          <button className="text-white bg-primary hover:bg-seconday p-2 w-24 rounded-sm">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
