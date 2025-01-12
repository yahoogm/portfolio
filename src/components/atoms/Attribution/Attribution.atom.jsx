const Attribution = ({ project }) => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="font-bold text-2xl border-l-4 px-4 border-my-primary dark:text-dm-text-primary capitalize">
        attribution
      </div>
      <ol className="px-4 space-y-2">
        {project.detailTeam.map((detail, idx) => (
          <li className="list-disc capitalize" key={idx.toString()}>
            <a
              href={detail.profile}
              target="_blank"
              rel="noreferrer"
              className="transition ease-in-out duration-150 delay-75 font-bold dark:text-my-primary underline underline-offset-4 decoration-dotted decoration-lm-text dark:decoration-dm-text dark:hover:decoration-my-primary "
            >
              {detail.name}
            </a>
            <span className="dark:text-neutral-300 text-lm-text">
              : {detail.role}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Attribution;
