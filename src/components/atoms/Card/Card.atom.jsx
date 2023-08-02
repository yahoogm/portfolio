import { BiSolidCategoryAlt } from "react-icons/bi";

const CardAtom = ({ link, title, description, category, img }) => {
  return (
    <a
      href={link}
      className="group relative block h-64 sm:h-80 lg:h-96"
      target="_blank"
      rel="noreferrer"
    >
      <span
        className={`absolute inset-0 border-2 border-dashed border-my-primary ${img} bg-cover bg-top`}
      ></span>

      <div className="relative flex h-full transform items-end border-2 border-my-primary  transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:bg-lm-background group-hover:dark:bg-dm-background duration-300 ease-in-out">
        <div className="p-4 sm:p-6 lg:p-8 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0" />

        <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
          <h3 className="mt-4 text-xl font-medium sm:text-2xl capitalize">
            {title}
          </h3>

          <p className="mt-2 lg:mt-4 text-sm sm:text-base">{description}</p>

          <p className="mt-4 lg:mt-8 font-bold flex items-center gap-5">
            <BiSolidCategoryAlt />
            <span>{category}</span>
          </p>
        </div>
      </div>
    </a>
  );
};

export default CardAtom;
