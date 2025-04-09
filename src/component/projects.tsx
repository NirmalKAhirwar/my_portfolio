import React from "react";
import ProjectCard from "./projectcard";

type Project = {
  name: string;
  description: string;
  link: string;
  image: string;
  asset: string;
  github?: string;
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      name: "MyRead - Smart Book Recommendation Engine",
      description:
        "A personalized book recommendation system using collaborative filtering, offering tailored suggestions based on user interests and reading behavior.",
      link: "https://my-read-dn18.onrender.com/",
      image: "",
      asset: "/project-image/myread.png",
      github: "https://github.com/NirmalKAhirwar/my_read",
    },
    {
      name: "Plantopia",
      description:
        "A flower classification app using Vision Transformers, accurately identifying species with interactive UI and Hugging Face deployment.",
      link: "https://huggingface.co/spaces/lamrin8224/lamrin8224-Plantopia_oxford_flowers_image_detection",
      image:
        "https://play-lh.googleusercontent.com/5P0JrZjQBuMB3mERlpWfWWWb5jsW94LBYJiRDdO650iBVAbVoCO8o1q5Z1XQ0mZDLbo=w240-h480-rw",
      asset: "/project-image/plantopia.png",
      github:
        "https://www.kaggle.com/code/klausmikaelson2002/plantopia-oxford-flowers-image-detection-vit",
    },
  ];


  return (
    <section id="projects" className="py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      
    </section>
  );
};

export default Projects;
