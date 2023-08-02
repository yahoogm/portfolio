import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from 'react-icons/io';
import { Link } from 'react-scroll';

const FooterOrganism = () => {
  return (
    <footer className="footer footer-center p-10 text-lm-text dark:text-dm-text border-t-my-primary border-t-2">
      <div className="grid grid-flow-col gap-4">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          className="link link-hover"
        >
          About
        </Link>
        <Link
          to="portfolio"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          className="link link-hover"
        >
          Portfolio
        </Link>
        <Link
          to="certificate"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          className="link link-hover"
        >
          Certificate
        </Link>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          className="link link-hover"
        >
          Contact
        </Link>
      </div>
      <div>
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
      </div>
      <div>
        <p>
          © 2023 | by{' '}
          <a
            href="https://linkedin.com/in/yahoo-garfield-manik"
            className="text-my-primary"
          >
            Yahoo Garfield Manik.
          </a>{' '}
          All right reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterOrganism;
