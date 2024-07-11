import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from 'react-icons/io';

const FooterOrganism = () => {
  return (
    <footer className="footer footer-center px-6 md:px-10 lg:px-52 text-lm-text dark:text-dm-text">
      <div className="border-t-my-primary border-t-2 w-full py-10 space-y-2 ">
        <h1 className="md:text-lg">Reach me out</h1>
        <div className="grid grid-flow-col gap-4">
          <a href="https://wa.me/6282167048354">
            <IoLogoWhatsapp
              size={32}
              className="hover:text-my-primary transition-all duration-300 ease-in"
            />
          </a>
          <a href="https://github.com/yahoogm">
            <IoLogoGithub
              size={32}
              className="hover:text-my-primary transition-all duration-300 ease-in"
            />
          </a>
          <a href="https://www.instagram.com/yahoomanik/">
            <IoLogoInstagram
              size={34}
              className="hover:text-my-primary transition-all duration-300 ease-in"
            />
          </a>
          <a href="https://linkedin.com/in/yahoo-garfield-manik">
            <IoLogoLinkedin
              size={34}
              className="hover:text-my-primary transition-all duration-300 ease-in"
            />
          </a>
        </div>

        <div>
          <p>
            © {new Date().getFullYear()} | by{' '}
            <a
              href="https://linkedin.com/in/yahoo-garfield-manik"
              className="text-my-primary"
            >
              Yahoo Garfield Manik.
            </a>{' '}
            All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterOrganism;
