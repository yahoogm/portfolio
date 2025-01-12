import { BiLink } from 'react-icons/bi';
import { IoPeople } from 'react-icons/io5';

const ImageDetail = ({ img, title, imgDescription, team, domain }) => {
  return (
    <div className="flex flex-col gap-2">
      <img className="rounded-md object-contain" src={img} alt={title} />
      <h1 className="text-xl md:text-2xl capitalize font-bold dark:text-dm-text-primary">
        {title}
      </h1>
      <h1 className="dark:text-neutral-300 text-lm-text text-base">
        {imgDescription}
      </h1>
      <div className="flex gap-2 items-center">
        <BiLink size={20} />
        <a
          href={domain}
          target="_blank"
          rel="noreferrer"
          className="text-lm-tertiary hover:text-my-primary transition ease-in-out delay-75 duration-150"
        >
          Open Live Site
        </a>
      </div>
      <div className="flex gap-2 items-center">
        <IoPeople size={20} />
        <span className="dark:text-neutral-300 text-lm-text">
          {' '}
          Team of {team.length}
        </span>
      </div>
      <div className="mt-4 border border-neutral-500"></div>
    </div>
  );
};

export default ImageDetail;
