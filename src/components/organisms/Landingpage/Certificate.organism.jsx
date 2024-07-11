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
