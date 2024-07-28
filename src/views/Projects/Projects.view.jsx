import { BiLogoTailwindCss, BiLogoReact, BiLogoFirebase } from 'react-icons/bi';
import { SiChakraui, SiNextdotjs, SiRedux } from 'react-icons/si';
import { MainTemplate } from '../../components/template';
import { Card } from '../../components/atoms';
import FooterOrganism from '../../components/organisms/Landingpage/Footer.organism';

const ProjectsPageView = () => {
  return (
    <MainTemplate>
      <div
        name="portfolio"
        className="py-8 px-6 md:px-10 lg:px-52 overflow-y-hidden space-y-2"
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
          Showcase of my works on frontend development.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          <div data-aos="fade-up">
            <Card
              link={'/project/baby-nutrition'}
              img={'/img/portfolio/baby-nutrition.png'}
              title={'baby nutrition'}
              logo={
                <div className="flex gap-2 items-center">
                  <SiNextdotjs size={20} /> <BiLogoTailwindCss size={24} />
                  <BiLogoFirebase size={20} /> <SiRedux size={19} />
                </div>
              }
              description={'Web application for baby calorie management.'}
            />
          </div>

          <div data-aos="fade-up">
            <Card
              link={'/project/wastehubBesakih'}
              img={'/img/portfolio/wastehub.jpg'}
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
              link={'/project/sociops'}
              img={'/img/portfolio/sociops.png'}
              title={'Sociops'}
              description={
                'Social campaigns volunteer programs and fundraising.'
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
              link={'/project/tokopeduli'}
              img={'/img/portfolio/tokopeduli.png'}
              title={'tokopeduli play'}
              description={
                'Final project Generasi GIGIH Batch 3 from GOTO Foundation.'
              }
              logo={
                <div className="flex gap-2 items-center">
                  <BiLogoReact size={20} /> <SiChakraui size={20} />
                </div>
              }
            />
          </div>
          <div data-aos="fade-up">
            <Card
              link={'/project/books-gallery'}
              img={'/img/portfolio/books-gallery.png'}
              title={'books gallery'}
              description={
                'Miniproject project on program MSIB 3 in Alterra Academy.'
              }
              logo={
                <div className="flex gap-2 items-center">
                  <SiNextdotjs size={20} /> <SiRedux size={19} />
                  <BiLogoFirebase size={20} /> <BiLogoTailwindCss size={24} />
                </div>
              }
            />
          </div>
          <div data-aos="fade-up">
            <Card
              link={'/project/todoApp'}
              img={'/img/portfolio/todo.jpg'}
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
        </div>
      </div>
      <FooterOrganism />
    </MainTemplate>
  );
};

export default ProjectsPageView;
