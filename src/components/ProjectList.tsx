"use client";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
  title: string;
  showHeader?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const ProjectList = ({
  title,
  projects,
  showHeader = true
}: ProjectListProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="mt-8 ml-4" ref={ref}>
      {showHeader && (
        <div>
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
        </div>
      )}

      <motion.div
        className="grid grid-cols-3"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectList;
