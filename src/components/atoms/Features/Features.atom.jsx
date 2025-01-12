const Features = ({ project }) => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="font-bold text-2xl border-l-4 px-4 border-my-primary dark:text-dm-text-primary capitalize">
        Features
      </div>
      <div className="space-y-6">
        {project.features.map((feature, idx) => {
          return (
            <div key={idx.toString()} className="space-y-2">
              <h2 className="text-xl font-bold capitalize dark:text-dm-text-primary">
                {feature.title}
              </h2>
              <p className="normal-case dark:text-dm-text text-lm-text">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
