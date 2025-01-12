import { Typewriter } from 'react-simple-typewriter';
import { BsDashLg } from 'react-icons/bs';
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

const AboutOrganism = () => {
  return (
    <div name="about" className="py-8 px-6 md:px-10 lg:px-52 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="flex justify-center items-center p-5 lg:p-0">
          <div>
            <img
              src="/img/home-icon.png"
              alt="profile"
              className="object-cover object-center  w-72 h-72 md:w-96 md:h-96 lg:w-full lg:h-full"
              data-aos="fade-up"
            />
          </div>
        </div>
        <div className="lg:col-span-2 lg:pl-10 h-full flex items-center">
          <div className="flex flex-col gap-4">
            <h6 className="font-bold">
              <div
                className="font-consolas text-2xl lg:text-6xl dark:text-dm-text-primary"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Hi!
              </div>
              <div
                className="font-consolas text-2xl lg:text-6xl dark:text-dm-text-primary"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                You can call me
              </div>
              <div
                className="uppercase font-extrabold text-2xl lg:text-5xl text-my-primary"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Yahoo Garfield Manik,
              </div>
              <div
                className="uppercase font-extrabold text-2xl lg:text-5xl text-my-primary"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <Typewriter
                  words={['Freshgraduate', 'Front-End Developer']}
                  cursor
                  loop={true}
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={2000}
                />
              </div>
            </h6>
            <div>
              <p
                className="text-justify text-md lg:text-xl"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                I work with React Ecosystem. My latest activity is participating
                in the Magang Generasi Bertalenta{' '}
                <a
                  href="https://magentaku.id/"
                  className="font-bold text-lm-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  (MAGENTA)
                </a>{' '}
                program at{' '}
                <a
                  href="https://pelindomultiterminal.co.id/"
                  className="font-bold text-lm-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  PT Pelindo Multi Terminal
                </a>{' '}
                as a Engineer.
              </p>
            </div>
            <hr data-aos="fade-up" data-aos-delay="1000" />
            <div
              className="mb-10 flex gap-3 items-center "
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <a
                className="group relative inline-flex items-center overflow-hidden border border-my-primary px-8 py-3 focus:outline-none focus:ring"
                href="/CV/CV - Yahoo Garfield Manik.pdf"
                download
                target="_blank"
              >
                <span className="absolute inset-y-0 left-0 w-[2px] bg-my-primary transition-all duration-300 ease-out group-hover:w-full group-active:bg-my-primary"></span>
                <span className="absolute -end-full transition-all group-hover:end-4">
                  <svg
                    className="h-5 w-5 rtl:rotate-180 text-dm-text"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                <span className="relative text-lg font-medium text-my-primary transition-all group-hover:text-dm-text-primary group-hover:me-4">
                  Download CV
                </span>
              </a>
              <div>
                <BsDashLg className="text-2xl md:text-4xl lg:text-5xl" />
              </div>
              <div className="flex gap-1 items-center">
                <a href="https://www.instagram.com/yahoomanik/" target="blank">
                  <FaInstagramSquare className="text-2xl md:text-4xl lg:text-6xl dark:hover:text-my-primary dark:text-dm-text-primary transition-all ease-in" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yahoo-garfield-manik/"
                  target="blank"
                >
                  <FaLinkedin className="text-2xl md:text-4xl lg:text-6xl dark:hover:text-my-primary dark:text-dm-text-primary transition-all ease-in" />
                </a>
                <a href="https://github.com/yahoogm" target="blank">
                  <FaGithubSquare className="text-2xl md:text-4xl lg:text-6xl dark:hover:text-my-primary dark:text-dm-text-primaryt ransition-all ease-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOrganism;
