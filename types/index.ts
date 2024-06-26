interface Project {
  id: string;
  title: string;
  thumbnail: string;
  desc: string;
  year: string;
  student: string;
  type: "final" | "mini" | "personal";
}

interface ProjectDetail extends Project {
  contributors: {
    name: string;
    role: string;
  }[];
  link: string;
}
