import { CSSProperties } from "react";
import { BsCircleFill } from "react-icons/bs";

interface ProjectCardProps {
  project: Project;
}

const getProjectColor = (type: Project["type"]): CSSProperties["color"] => {
  switch (type) {
    case "mini":
      return "yellow";

    case "final":
      return "green";

    case "personal":
      return "blue";

    default:
      return "gray";
  }
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const projectColor = getProjectColor(project.type);
  return (
    <div
      style={{
        borderColor: projectColor
      }}
      className="h-[500] border hover:border-4 m-4 flex flex-col justify-between p-4 shadow-lg"
    >
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold mb-2"> {project.title}</p>
        <div className={`flex p-2 justify-center items-center`}>
          <BsCircleFill color={projectColor} />
          <p className="ml-2 capitalize">{project.type} </p>
        </div>
      </div>

      <img className="w-full" src={project.thumbnail} />
      <p className="h-[100] overflow-hidden line-clamp-4">{project.desc}</p>
      <div className="flex justify-between">
        <p className="text-gray-500">@{project.student}</p>
        <p className="text-gray-500">{project.year}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
