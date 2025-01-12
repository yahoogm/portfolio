import { createBrowserRouter } from 'react-router-dom';
import {
  DetailProject,
  LandingPage,
  CertificatePageView,
  ProjectPageView,
  AboutPageView,
} from './views';
export const Router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/about',
    element: <AboutPageView />,
  },
  {
    path: '/projects',
    element: <ProjectPageView />,
  },
  {
    path: '/certificates',
    element: <CertificatePageView />,
  },
  {
    path: '/project/:projectId',
    element: <DetailProject />,
  },
]);
