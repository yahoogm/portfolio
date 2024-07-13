import { Link } from 'react-router-dom';
import { Footer } from '../../components/organisms';
import { MainTemplate } from '../../components/template';
import {
  SiFirebase,
  SiMysql,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
} from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { BiLogoMongodb, BiLogoTypescript } from 'react-icons/bi';
import { TbBrandReactNative } from 'react-icons/tb';

const AboutViewPage = () => {
  return (
    <MainTemplate>
      <div
        className="px-6 md:px-10 lg:px-52 py-8 space-y-10 tracking-wide leading-relaxed"
        data-aos="fade-up"
      >
        <div>
          <h1 className="capitalize font-bold text-xl md:text-3xl dark:text-dm-text-primary">
            about
          </h1>
          <h2 className="capitalize font-bold text-my-primary text-2xl md:text-3xl">
            yahoo garfield manik
          </h2>
        </div>

        <div className="space-y-4 text-md">
          <div>
            <img
              src={'/img/profile.jpg'}
              alt="Example Image"
              className="w-40 h-40 md:w-72 md:h-72 float-right rounded-md ml-2 mb-2"
            />
            <p className="dark:text-neutral-300 text-lm-text md:text-lg">
              Hello! I&apos;m Yahoo Garfield Manik. I started studying frontend
              web development when I was studying at the University of North
              Sumatra, majoring in Information Engineering in 2020 and finished
              the course in 2023. I learned a lot about web development, not
              only from campus material, but from{' '}
              <Link
                className="transition ease-in-out duration-150 delay-75 dark:text-my-primary underline underline-offset-4 dark:decoration-dm-text decoration-dotted dark:hover:decoration-my-primary hover:decoration-my-primary"
                to={'https://www.youtube.com/@sandhikagalihWPU'}
              >
                YouTube
              </Link>
              ,{' '}
              <Link
                className="transition ease-in-out duration-150 delay-75 dark:text-my-primary underline underline-offset-4 dark:decoration-dm-text decoration-dotted dark:hover:decoration-my-primary hover:decoration-my-primary"
                to={'https://www.dicoding.com/'}
              >
                Dicoding
              </Link>
              ,{' '}
              <Link
                className="transition ease-in-out duration-150 delay-75 dark:text-my-primary underline underline-offset-4 dark:decoration-dm-text decoration-dotted dark:hover:decoration-my-primary hover:decoration-my-primary"
                to={'https://progate.com/'}
              >
                Progate
              </Link>
              , and taking part in the{' '}
              <Link
                className="transition ease-in-out duration-150 delay-75 dark:text-my-primary underline underline-offset-4 dark:decoration-dm-text decoration-dotted dark:hover:decoration-my-primary hover:decoration-my-primary"
                to={'https://kampusmerdeka.kemdikbud.go.id/'}
              >
                Kampus Merdeka
              </Link>
              , which consisting of Independent Study (MSIB) and Internship with
              Independent Campus (MBKM).
            </p>
          </div>

          <p className="dark:text-neutral-300 text-lm-text md:text-lg">
            I learned many things and technologies for frontend development. I
            am always motivated and enthusiastic to learn new things apart from
            the IT field so I can compete with other people.
          </p>

          <p className="dark:text-neutral-300 text-lm-text md:text-lg">
            On my website, I explain all the skills, certificates, and projects
            that I have worked on along with the technology, features, and teams
            that work with me. So don&apos;t forget to connect with my social
            media account so we can be friends.
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="capitalize font-bold text-xl md:text-3xl dark:text-dm-text-primary">
            tech stack
          </h1>
          <div className="flex items-center gap-2">
            <SiNextdotjs className="w-6 h-6 md:w-12 md:h-12" />
            <FaReact className="w-6 h-6 md:w-12 md:h-12" />
            <BiLogoTypescript className="w-6 h-6 md:w-12 md:h-12" />
            <SiTailwindcss className="w-6 h-6 md:w-12 md:h-12" />
            <SiRedux className="w-6 h-6 md:w-12 md:h-12" />
            <TbBrandReactNative className="w-6 h-6 md:w-12 md:h-12" />
            <SiFirebase className="w-6 h-6 md:w-12 md:h-12" />
            <BiLogoMongodb className="w-6 h-6 md:w-12 md:h-12" />
            <SiMysql className="w-8 h-8 md:w-14 md:h-14" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="capitalize font-bold text-xl md:text-3xl dark:text-dm-text-primary">
            contact
          </h1>
          <p className="dark:text-neutral-300 text-lm-text md:text-lg">
            If you want to make friends or ask me questions about IT, you can
            contact the account listed in the footer, I will be very happy to
            help as best I can.
          </p>
        </div>
      </div>
      <Footer />
    </MainTemplate>
  );
};

export default AboutViewPage;
