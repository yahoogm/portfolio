import { Card } from '../../atoms';
import { BiLogoTailwindCss, BiLogoReact } from 'react-icons/bi';
import { SiNextdotjs } from 'react-icons/si';
import { sociops, todo_mockup, wastehub } from '../../../../public/img';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div
      name="portfolio"
      className="py-6 px-6 md:px-10 lg:px-52 overflow-y-hidden space-y-2 overflow-hidden"
    >
      <div
        className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-start py-2 text-my-primary"
        data-aos="fade-up"
      >
        My Featured Project
      </div>

      <div
        className="text-md lg:text-xl font-medium text-start mb-5"
        data-aos="fade-up"
      >
        Some projects that I&apos;m proud of
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        <div data-aos="fade-up">
          <Card
            link={'/project/wastehubBesakih'}
            img={wastehub}
            title={'Wastehub Besakih'}
            logo={
              <div className="flex gap-2 items-center">
                <BiLogoReact size={20} /> <BiLogoTailwindCss size={24} />
              </div>
            }
            description={
              'Web application for handling waste management in Besakih Village.'
            }
          />
        </div>
        <div data-aos="fade-up">
          <Card
            link={'/project/todoApp'}
            img={todo_mockup}
            title={'Todo App'}
            description={
              'A website-based application created to make your todo list.'
            }
            logo={
              <div className="flex gap-2 items-center">
                <SiNextdotjs size={20} /> <BiLogoTailwindCss size={24} />
              </div>
            }
          />
        </div>
        <div data-aos="fade-up">
          <Card
            link={'/project/sociops'}
            img={sociops}
            title={'Sociops'}
            description={'Social campaigns volunteer programs and fundraising.'}
            logo={
              <div className="flex gap-2 items-center">
                <SiNextdotjs size={20} /> <BiLogoTailwindCss size={24} />
              </div>
            }
          />
        </div>
      </div>

      <button
        className="border p-2 rounded-md border-neutral-300 dark:border-neutral-500 font-bold transition ease-in-out delay-75 hover:scale-x-105  duration-300"
        onClick={() => navigate('/projects')}
      >
        See more project
      </button>
    </div>
  );
};

export default Projects;
