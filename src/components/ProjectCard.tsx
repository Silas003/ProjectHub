interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="h-[500] border border-secondary hover:border-4 hover:border-primary m-4 flex flex-col justify-between p-4 shadow-lg">
      <p className="text-lg font-bold mb-2"> {project.title}</p>

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
