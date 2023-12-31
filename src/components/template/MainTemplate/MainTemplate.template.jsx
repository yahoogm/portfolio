import { useEffect } from 'react';
import { useTheme } from '../../../configs/redux/Theme/themeSelector';
import { useDispatch } from 'react-redux';
import { themeActions } from '../../../configs/redux/Theme/themeSlice';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';
import { IoChevronDownOutline } from 'react-icons/io5';
import './MainTemplate.css';
import { Link } from 'react-scroll';

/* eslint-disable react/prop-types */
const MainTemplate = ({ children }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  useEffect(() => {
    if (theme === null) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        dispatch(themeActions.setTheme('dark'));
      } else {
        dispatch(themeActions.setTheme('dark'));
      }
    }
  });
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  const handleDarkMode = (e) => {
    if (e.target.checked) {
      dispatch(themeActions.setTheme('dark'));
    } else {
      dispatch(themeActions.setTheme('light'));
    }
  };
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full sticky top-0 z-10 navbar bg-opacity-30 bg-lm-background bg-blur-lg backdrop-blur-lg dark:bg-opacity-30 dark:bg-blur-lg dark:backdrop-blur-lg dark:bg-dm-background dark:text-dm-text">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              className="btn btn-square btn-ghost swap swap-rotate"
            >
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-lm-text dark:text-dm-text text-2xl font-bold italic">
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:cursor-pointer"
            >
              Yahoo
              <span className="text-my-primary">GM</span>
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="flex items-center gap-8 font-semibold">
              {/* Navbar menu content here */}
              <li>
                <Link
                  to="about"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="mx-4 nav-link dark:active:text-dm-text text-lm-text dark:text-dm-text dark:hover:text-my-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="mx-4 nav-link dark:active:text-dm-text text-lm-text dark:text-dm-text dark:hover:text-my-primary"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="certificate"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="mx-4 nav-link dark:active:text-dm-text text-lm-text dark:text-dm-text dark:hover:text-my-primary"
                >
                  Certificate
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="mx-4 nav-link dark:active:text-dm-text text-lm-text dark:text-dm-text dark:hover:text-my-primary"
                >
                  Contact
                </Link>
              </li>
              <li className="mx-4 flex items-center">
                <label
                  className="swap swap-rotate fill-lm-text dark:fill-dm-text hover:fill-my-primary dark:hover:fill-my-primary"
                  htmlFor="input-dark-mode"
                >
                  {/* this hidden checkbox controls the state */}
                  <input
                    type="checkbox"
                    onChange={handleDarkMode}
                    checked={theme === 'dark' ? true : false}
                    id="input-dark-mode"
                  />
                  {/* moon icon */}
                  <RiMoonClearFill
                    size={20}
                    className="swap-on text-my-primary"
                  />
                  {/* sun icon */}
                  <RiSunFill size={20} className="swap-off text-my-primary" />
                </label>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side z-20">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="flex flex-col gap-4 p-4 w-80 h-full bg-base-100 dark:bg-dm-background dark:text-dm-text font-semibold">
          {/* Sidebar content here */}
          <li className="w-full nav-link-slide">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              to="about"
            >
              About
            </Link>
          </li>
          <li className="w-full nav-link-slide">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              to="portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li className="w-full nav-link-slide">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              to="certificate"
            >
              Certificate
            </Link>
          </li>
          <li className="w-full nav-link-slide">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              to="contact"
            >
              Contact
            </Link>
          </li>
          <li className="mt-auto border-t-[0.3px] border-lm-text dark:border-dm-text py-4 flex justify-between items-center">
            <div>Switch Theme</div>
            <div className="dropdown dropdown-top dropdown-end">
              <label tabIndex={0} className="border-2 rounded-md flex">
                {theme === 'dark' ? (
                  <>
                    <span className="flex items-center gap-2 p-2">
                      <RiMoonClearFill size={24} />
                      Dark <IoChevronDownOutline size={16} />
                    </span>
                  </>
                ) : (
                  <>
                    <span className="flex items-center gap-2 p-2">
                      <RiSunFill size={24} />
                      Light <IoChevronDownOutline size={16} />
                    </span>
                  </>
                )}
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] p-2 shadow-my-primary shadow bg-base-100 rounded-box w-52 mt-4 text-lm-text dark:text-dm-text dark:bg-dm-background"
              >
                <li>
                  <a
                    className="flex items-center"
                    onClick={() => dispatch(themeActions.setTheme('light'))}
                  >
                    <div className="flex items-center">
                      <svg
                        className="fill-current w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                      </svg>
                      &nbsp;
                    </div>
                    <div>Light</div>
                  </a>
                </li>
                <li className="mt-auto">
                  <a
                    className="flex items-center"
                    onClick={() => dispatch(themeActions.setTheme('dark'))}
                  >
                    <div className="flex items-center">
                      <svg
                        className="swap-off fill-current w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                      </svg>
                      &nbsp;
                    </div>
                    <div>Dark</div>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainTemplate;
