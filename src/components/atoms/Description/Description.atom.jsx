const Description = ({ title, description }) => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="font-bold text-2xl border-l-4 px-4 border-my-primary capitalize dark:text-dm-text-primary">
        {title}
      </div>
      <p className="dark:text-dm-text text-lm-text">{description}</p>
    </div>
  );
};

export default Description;
