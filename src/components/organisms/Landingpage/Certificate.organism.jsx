import { useNavigate } from 'react-router-dom';
import { CardCertificate } from '../../atoms';

const CertificateOrganism = () => {
  const navigate = useNavigate();
  return (
    <div name="certificate" className="py-16 px-6 md:px-10 lg:px-52">
      <div
        className="text-2xl md:text-3xl lg:text-5xl font-extrabold py-3 text-my-primary text-start"
        data-aos="fade-up"
      >
        Featured Certificate
      </div>

      <div
        className="text-md lg:text-xl font-medium text-start mb-5"
        data-aos="fade-up"
      >
        Explore my collection of certificates reflecting my commitment to skill
        enhancement and personal growth.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-4">
        <div data-aos="fade-up">
          <CardCertificate
            title={'FullStack Engineering'}
            organizer={'GoTo Impact Foundation'}
            link={
              'https://drive.google.com/file/d/1xUzYEu08NfZc5XaenljBdFV7AxWLBYzg/view?usp=sharing'
            }
          />
        </div>
        <div data-aos="fade-up">
          <CardCertificate
            title={'React JS'}
            organizer={'Progate'}
            link={'https://progate.com/course_certificate/fc57e20eryrea5'}
          />
        </div>
        <div data-aos="fade-up">
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
        <div data-aos="flip-down" data-aos-delay="300">
          <CardCertificate
            title={'Engineering'}
            organizer={'PT Pelindo Multi Terminal'}
            link={
              'https://drive.google.com/file/d/15HjhCGyzXKwG1LM-TvYdGDtr-wSY9VQF/view?usp=sharing'
            }
          />
        </div>
      </div>
      <button
        data-aos="fade-up"
        className="mt-4 border p-2 rounded-md border-neutral-300 dark:border-neutral-500 font-bold transition ease-in-out delay-75 hover:scale-x-105  duration-300"
        onClick={() => navigate('/certificates')}
      >
        See more certificates
      </button>
    </div>
  );
};

export default CertificateOrganism;
