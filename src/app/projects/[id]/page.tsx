import Navbar from "@/components/Navbar";
import { FaCircle } from "react-icons/fa";

interface ProjectDetailsProps {
  params: { id: string };
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
  const { id } = params;

  const project = {
    id,
    link: "https://example.com",
    title: "The next twitter",
    thumbnail:
      "https://nickjanetakis.com/assets/blog/cards/how-to-start-and-finish-any-web-app-project-678900795cfd6d4fa60e3655dd62ae9f61ef5e14b62ca62050e817e43e861f11.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt viverra nulla non venenatis. Nullam sed nunc egestas, mollis diam iaculis, aliquet magna. Curabitur varius egestas sem sed bibendum. Donec a facilisis tortor. Phasellus ullamcorper tincidunt dictum. Aenean venenatis, metus ac molestie pharetra, nisi purus tempor orci, ut porta magna sem non velit. Donec ac rhoncus mauris. Aliquam non ante non turpis tincidunt interdum sit amet sit amet arcu. In sollicitudin non orci vitae tristique. Mauris interdum et nulla vel condimentum. In commodo velit eu diam pretium, ut elementum leo pellentesque. Vestibulum sodales purus sed accumsan pretium.",
    year: 2020,
    student: "Dope Khid",
    contributors: [
      { name: "Kwaa Taa", role: "Frontend Developer" },
      { name: "Yaw Menu", role: "Backend Developer" }
    ],
    type: ["mini", "final", "personal"][
      Math.floor(Math.random() * 3)
    ] as Project["type"]
  };

  return (
    <div className="m-4">
      <Navbar />

      <div className="flex justify-center items-center ">
        <img className="h-[500] w-screen" src={project.thumbnail} />
      </div>

      <div className="flex flex-col">
        <h1 className="mt-4 text-[3rem] font-bold">{project.title}</h1>

        <div className="flex text-gray-400 items-center">
          <span className="mr-2">{project.year}</span>
          <FaCircle />
          <span className="ml-2 mr-2 capitalize">{project.type}</span>
          <FaCircle />
          <a className="ml-2 text-blue-400" href={project.link}>
            {project.link}
          </a>
        </div>
        <hr className=" w-60 h-4 bg-secondary" />
      </div>

      <div className="mt-4">
        <h2 className="font-bold text-lg">Description</h2>
        <p>{project.desc}</p>
      </div>

      <div className="mt-4">
        <h2 className="font-bold text-lg">Contributors</h2>

        <div className="grid grid-cols-3">
          {project.contributors.map(({ role, name }) => (
            <div className="shadow-md p-4 bg-gray-300 mr-4">
              <p className="font-bold">{name}</p>

              <p>{role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
