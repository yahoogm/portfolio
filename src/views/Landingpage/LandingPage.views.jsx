import {
  About,
  Certificate,
  Footer,
  Projects,
} from '../../components/organisms';
import { MainTemplate } from '../../components/template';

const LandingPageViews = () => {
  return (
    <div>
      <MainTemplate>
        <About />
        <Projects />
        <Certificate />
        <Footer />
      </MainTemplate>
    </div>
  );
};

export default LandingPageViews;
