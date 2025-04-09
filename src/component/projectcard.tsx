type Project = {
  name: string;
  description: string;
  link: string;
  image: string;
  asset: string;
  github?: string;
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <div
        key={project.name}
        className="p-5 flex w-full h-full bg-gray-800 rounded-lg transition duration-300 hover:scale-105">
        <div className="flex items-center w-full">
          <div className="w-24 h-24 flex-shrink-0">
            <img
              src={project.asset}
              alt={project.name}
              className="rounded-lg object-cover w-full h-full"
              style={{ aspectRatio: "1/1" }}
            />
          </div>

          <div className="ml-4 flex-1">
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-400">{project.description}</p>
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-gray-400 hover:text-white transition"
              title="View source on GitHub">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.014c0 4.42 2.865 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.071 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.112-4.555-4.945 0-1.092.39-1.987 1.029-2.686-.103-.254-.446-1.273.098-2.654 0 0 .84-.27 2.75 1.025A9.563 9.563 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.295 2.748-1.025 2.748-1.025.546 1.381.202 2.4.1 2.654.64.7 1.028 1.594 1.028 2.686 0 3.842-2.338 4.688-4.566 4.936.359.31.679.921.679 1.856 0 1.339-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.014C22 6.484 17.523 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
