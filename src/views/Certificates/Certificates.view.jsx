import { CardCertificate } from '../../components/atoms';
import { Footer } from '../../components/organisms';
import { MainTemplate } from '../../components/template';
import certificates from './certificates.json';

const CertificateViewPage = () => {
  return (
    <MainTemplate>
      <div className="py-8 px-6 md:px-10 lg:px-52 flex-col space-y-12 tracking-wide leading-relaxed">
        <div>
          <div
            className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-start py-2 text-my-primary"
            data-aos="fade-up"
          >
            Featured Certificates
          </div>
          <div
            className="text-md lg:text-xl font-medium text-start mb-5"
            data-aos="fade-up"
          >
            Showcase all of my certificates in programming.
          </div>
        </div>

        <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
          {certificates.map((certificate) => {
            return (
              <div key={certificate.id} data-aos="fade-up">
                <CardCertificate
                  title={certificate.title}
                  organizer={certificate.organizer}
                  link={certificate.link}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </MainTemplate>
  );
};

export default CertificateViewPage;
