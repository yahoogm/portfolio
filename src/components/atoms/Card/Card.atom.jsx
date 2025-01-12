import { Link } from 'react-router-dom';

const CardAtom = ({ link, title, description, img, logo }) => {
  return (
    <Link to={link}>
      <div className="transition ease-in-out delay-150 bg-blue-500 hover:scale-[1.03] hover:bg-indigo-500 duration-300 border border-neutral-300 rounded-md shadow dark:border-neutral-500 p-4 flex flex-col h-full">
        <img className="object-contain rounded-md" src={img} alt="wastehub" />

        <div className="py-2">
          <span>
            <h5 className="mb-2 capitalize text-md font-bold tracking-tight dark:text-dm-text-primary">
              {title}
            </h5>
          </span>
          <span>{logo}</span>
          <p className="text-sm mt-2 mb-3 text-gray-700 dark:text-gray-400 ">
            {description}
          </p>
          <span className="inline-flex items-center text-sm font-medium text-center text-white bg-blue-700 rounded-lg">
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CardAtom;
