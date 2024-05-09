import ProjectList from "./ProjectList";

const FeaturedProjects = () => {
  const projects: Project[] = new Array(6).fill(0).map((id) => ({
    id,
    title: "The next twitter",
    thumbnail:
      "https://nickjanetakis.com/assets/blog/cards/how-to-start-and-finish-any-web-app-project-678900795cfd6d4fa60e3655dd62ae9f61ef5e14b62ca62050e817e43e861f11.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt viverra nulla non venenatis. Nullam sed nunc egestas, mollis diam iaculis, aliquet magna. Curabitur varius egestas sem sed bibendum. Donec a facilisis tortor. Phasellus ullamcorper tincidunt dictum. Aenean venenatis, metus ac molestie pharetra, nisi purus tempor orci, ut porta magna sem non velit. Donec ac rhoncus mauris. Aliquam non ante non turpis tincidunt interdum sit amet sit amet arcu. In sollicitudin non orci vitae tristique. Mauris interdum et nulla vel condimentum. In commodo velit eu diam pretium, ut elementum leo pellentesque. Vestibulum sodales purus sed accumsan pretium.",
    year: 2020 + id,
    student: "Dope Khid"
  }));

  return <ProjectList title="Featured projects" projects={projects} />;
};

export default FeaturedProjects;
