import { Element } from 'react-scroll';
import { AnimateLine, CardCertificate } from '../../atoms';

const CertificateOrganism = () => {
  return (
    <Element name="certificate" className="py-16 px-4 lg:px-28">
      <div
        className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-my-primary"
        data-aos="fade-up"
      >
        Certificate
      </div>
      <div
        className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-center py-3"
        data-aos="fade-up"
      >
        Latest Certificate
      </div>
      <div className="flex justify-center my-5" data-aos="fade-up">
        <AnimateLine />
      </div>
      <div
        className="text-lg lg:text-xl font-medium text-center mb-10"
        data-aos="zoom-in-up"
      >
        Explore my collection of certificates reflecting my commitment to skill
        enhancement and personal growth.
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div data-aos="flip-down">
          <CardCertificate
            title={'React JS'}
            organizer={'Progate'}
            link={'https://progate.com/course_certificate/fc57e20eryrea5'}
          />
        </div>
        <div data-aos="flip-down">
          <CardCertificate
            title={'Git'}
            organizer={'Progate'}
            link={'https://progate.com/course_certificate/a34468adrxdqns'}
          />
        </div>
        <div data-aos="flip-down">
          <CardCertificate
            title={'HTML & CSS'}
            organizer={'Progate'}
            link={'https://progate.com/course_certificate/9f8da4b7rxbkba'}
          />
        </div>
        <div data-aos="flip-down">
          <CardCertificate
            title={'Javascript'}
            organizer={'Progate'}
            link={'https://progate.com/course_certificate/9efe2ba7rxdp8y'}
          />
        </div>
        <div data-aos="flip-down">
          <CardCertificate
            title={'Node JS'}
            organizer={'Progate'}
            link={'https://progate.com/course_certificate/ed221955ryio7d'}
          />
        </div>
        <div data-aos="flip-down">
          <CardCertificate
            title={'HTTP Learn For Beginner'}
            organizer={'Programmer Zaman Now'}
            link={
              'https://kelas.programmerzamannow.com/courses/1677220/certificate?certificate_first_issued=true'
            }
          />
        </div>
        <div data-aos="flip-down">
          <CardCertificate
            title={'Frontend Web Developer'}
            organizer={'PT Pundi Mas Berjaya (MSIB Batch 3)'}
            link={
              'https://drive.google.com/file/d/1vg8OeXn4gl_ZTajmtX_pi0-oqXoUQMhi/view'
            }
          />
        </div>
        <div data-aos="flip-down">
          <CardCertificate
            title={'Introduction Modern Javascript'}
            organizer={'Udemy'}
            link={
              'https://drive.google.com/file/d/1Ie8jmB2Q8_CIqkSgFFAH40c8fdg1DpeI/view'
            }
          />
        </div>
        <div data-aos="flip-down">
          <CardCertificate
            title={'Learn Basic Web Progamming'}
            organizer={'Dicoding Indonesia'}
            link={'https://www.dicoding.com/certificates/QLZ926889X5D'}
          />
        </div>
        <div data-aos="flip-down">
          <CardCertificate
            title={'Learn Create Backend Application For Beginner'}
            organizer={'Dicoding Indonesia'}
            link={'https://www.dicoding.com/certificates/JMZVNER4RPN9'}
          />
        </div>
        <div data-aos="flip-down">
          <CardCertificate
            title={'Learn Basic Javascript Programming'}
            organizer={'Dicoding Indonesia'}
            link={'https://www.dicoding.com/certificates/EYX490J25PDL'}
          />
        </div>
        <div data-aos="flip-down">
          <CardCertificate
            title={'Learn Cloud Practitioner Essentials'}
            organizer={'Dicoding Indonesia'}
            link={'https://www.dicoding.com/certificates/81P28177OPOY'}
          />
        </div>
        <div data-aos="flip-down" data-aos-delay="300">
          <CardCertificate
            title={'2023 Complete Front-End Engineer Career With ReactJS'}
            organizer={'Alterra Academy'}
            link={
              'https://drive.google.com/file/d/1xjKAU9-I0ySXOws89qKynAIVGDpNnwTZ/view'
            }
          />
        </div>
      </div>
    </Element>
  );
};

export default CertificateOrganism;
