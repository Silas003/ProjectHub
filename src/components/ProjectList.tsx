import Link from "next/link";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
  title: string;
}

const ProjectList = ({ title, projects }: ProjectListProps) => {
  return (
    <div className="mt-8 ml-4">
      <div className="flex justify-between mr-4">
        <h1 className="font-bold text-lg ml-4">{title}</h1>
        <Link
          href="/projects"
          className="border border-secondary p-4 hover:bg-primary hover:text-white rounded-sm"
        >
          Browse all
        </Link>
      </div>
      <hr className="ml-4 w-60 h-4 bg-secondary" />

      <div className="grid grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
