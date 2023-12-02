import { Element } from 'react-scroll';
import { AnimateLine, Card } from '../../atoms';

const PortfolioOrganism = () => {
  return (
    <Element
      name="portfolio"
      className="mt-[194px] py-16 px-4 lg:px-28 overflow-y-hidden"
    >
      <div
        className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-my-primary"
        data-aos="fade-up"
      >
        Portfolio
      </div>
      <div
        className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-center py-3"
        data-aos="fade-up"
      >
        My Recent Project
      </div>
      <div className="flex justify-center my-5" data-aos="fade-up">
        <AnimateLine />
      </div>
      <div
        className="text-lg lg:text-xl font-medium text-center mb-10"
        data-aos="zoom-in-up"
      >
        Check out my portfolio with a bunch of awesome projects I&apos;ve been a
        part of, including website building and UI designing. Some are all
        wrapped up, while others are still a work in progress.
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div data-aos="fade-up-right">
          <Card
            link={'https://besakih.wastehub.id/'}
            img={'bg-[url(/img/portfolio/home_mockup.jpg)]'}
            title={'Wastehub Besakih'}
            description={
              'Web application for handling waste management in Besakih Village. This website is my capstone project in Generasi GIGIH 3.0. This website build by team and me as a Frontend.'
            }
            category={'React.JS - Grid JS - Day JS - Material Tailwind'}
          />
        </div>
        <div data-aos="fade-up-left">
          <Card
            link={'https://the-todo-beta.vercel.app/'}
            img={'bg-[url(/img/portfolio/todo_mockup.jpg)]'}
            title={'Todo App'}
            description={
              'A website-based application created to make your todo list, and the website is my personal project. Have many feature like sign in, sign up, filter by complete or not complete, pagination, add, delete, and edit list.'
            }
            category={
              'Next.JS - Tailwind CSS - Typescript - Daisy UI - Vercel - Public API'
            }
          />
        </div>
        <div data-aos="fade-up-right">
          <Card
            link={'https://sociops-admin.vercel.app/'}
            img={'bg-[url(/img/portfolio/sociops.jpg)]'}
            title={'Sociops'}
            description={
              'Web application for social campaigns that focuses on volunteer programs and fundraising. This application is designed to provide a platform that facilitates users in contributing and getting involved in various social campaign programs.'
            }
            category={
              'Next.JS - Tailwind CSS - Rest API - Redux - Daisy UI - Formik - Vercel'
            }
          />
        </div>
        <div data-aos="fade-up-left">
          <Card
            link={'https://books-gallery-tawny.vercel.app/'}
            img={'bg-[url(/img/portfolio/books-gallery.jpg)]'}
            title={'Books Gallery'}
            description={
              'A website-based application created to read books online, the books provided are the result of Google Books. Users can add comments to a book.'
            }
            category={
              'Next.JS - Tailwind CSS - Google Books API - Daisy UI - Redux - Firebase - Vercel'
            }
          />
        </div>
        <div data-aos="fade-up-right">
          <Card
            link={'https://baby-nutrition.vercel.app/'}
            img={'bg-[url(/img/portfolio/baby-nutrition.jpg)]'}
            title={'Baby Nutrition'}
            description={
              'Website-based application with a focus on smartphone users. Serves to regulate the nutritional pattern of five-year-old babies and provide nutritional advice.'
            }
            category={
              'Next.JS - Tailwind CSS - Daisy UI - Redux - Firebase - Formik - Vercel'
            }
          />
        </div>
        <div data-aos="fade-up-left">
          <Card
            link={'https://tokopeduli-play.vercel.app/'}
            img={'bg-[url(/img/portfolio/tokped.jpg)]'}
            title={'Tokopeduli Play'}
            description={
              'This website was created when I attended Fullstack Engineer in Generasi GIGIH 3.0 at GoTo Foundation.'
            }
            category={
              'React.JS - Chakra UI - Vite - Axios - Typescript - Javascript - Express JS - Node JS - Vercel - Formik - Yup - Mongo DB'
            }
          />
        </div>
      </div>
    </Element>
  );
};

export default PortfolioOrganism;
