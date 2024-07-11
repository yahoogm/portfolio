import { useEffect } from 'react';
import { useTheme } from '../../../configs/redux/Theme/themeSelector';
import { useDispatch } from 'react-redux';
import { themeActions } from '../../../configs/redux/Theme/themeSlice';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

/* eslint-disable react/prop-types */
const MainTemplate = ({ children }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const location = useLocation();

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
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full sticky top-0 z-10 navbar bg-opacity-30 bg-lm-background bg-blur-lg backdrop-blur-lg dark:bg-opacity-30 dark:bg-blur-lg dark:backdrop-blur-lg dark:bg-dm-background dark:text-dm-text-primary">
          <div className="flex w-full px-3 md:px-6 lg:px-52 justify-between">
            <ul className="flex items-center font-semibold gap-2 md:gap-4 lg:gap-4 text-xs md:text-base ">
              {/* Navbar menu content here */}
              <li>
                <Link
                  to="/"
                  className={`dark:active:text-dm-text text-lm-text dark:text-dm-text-primary dark:hover:text-my-primary transition ease-in-out duration-150 delay-75 ${
                    location.pathname === '/'
                      ? 'dark:text-my-primary text-my-primary'
                      : ''
                  }`}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className={`dark:active:text-dm-text text-lm-text dark:text-dm-text-primary dark:hover:text-my-primary transition ease-in-out duration-150 delay-75 ${
                    location.pathname === '/projects'
                      ? 'dark:text-my-primary text-my-primary'
                      : ''
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/certificates"
                  className={`dark:active:text-dm-text text-lm-text dark:text-dm-text-primary dark:hover:text-my-primary transition ease-in-out duration-150 delay-75 ${
                    location.pathname === '/certificates'
                      ? 'dark:text-my-primary text-my-primary'
                      : ''
                  }`}
                >
                  Certificates
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`dark:active:text-dm-text text-lm-text dark:text-dm-text-primary dark:hover:text-my-primary transition ease-in-out duration-150 delay-75 ${
                    location.pathname === '/about'
                      ? 'dark:text-my-primary text-my-primary'
                      : ''
                  }`}
                >
                  About
                </Link>
              </li>
            </ul>

            <div className="flex items-center justify-end ">
              <label
                className="swap swap-rotate fill-lm-text dark:fill-dm-text hover:fill-my-primary dark:hover:fill-my-primary border hover:border-my-primary transition ease-in-out duration-150 delay-75 p-1 rounded-md border-neutral-500"
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
            </div>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
    </div>
  );
};

export default MainTemplate;
