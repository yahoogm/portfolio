import { useNavigate, useParams } from 'react-router-dom';
import FooterOrganism from '../../components/organisms/Landingpage/Footer.organism';
import { MainTemplate } from '../../components/template';
import projectsData from './project.json';
import {
  Attribution,
  Description,
  Features,
  ImageDetail,
  TechStack,
} from '../../components/atoms';
import { IoIosArrowRoundBack } from 'react-icons/io';

const DetailProject = () => {
  let { projectId } = useParams();
  const project = projectsData[projectId];
  const navigate = useNavigate();
  return (
    <MainTemplate>
      <div className="p-4 lg:px-52 flex-col space-y-12 tracking-wide leading-relaxed">
        <ImageDetail
          img={project.img}
          title={project.title}
          imgDescription={project.description}
          team={project.detailTeam}
          domain={project.domain}
        />
        <Description
          description={project.explanation}
          title={'short explanation'}
          s
        />
        <Description description={project.goals} title={'project goals'} />
        <Features project={project} />
        <TechStack project={project} />
        <Attribution project={project} />

        <button
          className="flex items-center gap-2 underline underline-offset-4 decoration-dotted hover:decoration-my-primary transition ease-in-out duration-150 delay-75 dark:text-neutral-300 text-lm-text"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowRoundBack size={24} />
          <span className="flex">Back to projects</span>
        </button>
      </div>
      <FooterOrganism />
    </MainTemplate>
  );
};

export default DetailProject;
