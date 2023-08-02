import { PiTagSimpleFill } from "react-icons/pi";

const CardCertificateAtom = ({ title, organizer, link }) => {
  return (
    <div className="mx-5 mb-1 grid grid-cols-12 py-4 border-l-4 border-my-primary shadow-xl dark:bg-neutral-800">
      <div className="pt-1 -ml-[2px]">
        <PiTagSimpleFill size={20} className="text-my-primary" />
      </div>
      <div className="col-span-11 flex flex-col justify-between gap-5">
        <div>
          <div className="text-lg lg:text-xl font-semibold line-clamp-1 pr-5">
            {title}
          </div>
          <div className="text-base lg:text-lg">
            <i>{organizer}</i>
          </div>
        </div>
        <div>
          <a
            className="group relative inline-flex items-center overflow-hidden border border-base-300 px-5 py-1 text-lm-text dark:text-dm-text focus:outline-none focus:ring active:text-lm-text hover:bg-my-primary hover:border-my-primary "
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <span className="absolute -end-full transition-all group-hover:end-4 duration-300 ease-out">
              <svg
                className="h-5 w-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:me-4  group-hover:pr-2 group-hover:text-dm-text duration-200 ease-out">
              View
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardCertificateAtom;
