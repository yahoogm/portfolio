const TechStack = ({ project }) => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="font-bold text-2xl border-l-4 px-4 border-my-primary dark:text-dm-text-primary text-lm-text capitalize">
        tech stack used
      </div>
      <ol className="px-4">
        {project.tech.map((tech, idx) => (
          <li
            className="list-disc dark:text-neutral-300 text-lm-text"
            key={idx.toString()}
          >
            {tech}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TechStack;
