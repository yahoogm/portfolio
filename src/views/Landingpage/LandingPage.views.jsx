import { CarouselScroll } from "../../components/molecules";
import {
  About,
  Certificate,
  Contact,
  Footer,
  Portfolio,
} from "../../components/organisms";
import { MainTemplate } from "../../components/template";

const LandingPageViews = () => {
  return (
    <div>
      <MainTemplate>
        <About />
        <CarouselScroll />
        <Portfolio />
        <Certificate />
        <Contact />
        <Footer />
      </MainTemplate>
    </div>
  );
};

export default LandingPageViews;
