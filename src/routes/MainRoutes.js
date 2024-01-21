import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';


// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const Term = Loadable(lazy(() => import('views/Terms-of-use/Terms')));
const Team = Loadable(lazy(() => import('views/Team/Team')));
const Rankings = Loadable(lazy(() => import('views/Rankings/Rankings')));
const Privacy = Loadable(lazy(() => import('views/Privacy/Privacy')));
const Blog = Loadable(lazy(() => import('views/Blog/Blog')));
const Contact = Loadable(lazy(() => import('views/Contact Page/Contact')));
const Docs = Loadable(lazy(() => import('views/Docs/Docs')));
const Code = Loadable(lazy(() => import('views/Code Page/Code')));
const Competitions = Loadable(lazy(() => import('views/Competition Page/Competitions')));
const Datasets = Loadable(lazy(() => import('views/Dataset Page/Datasets')));
const Discussions = Loadable(lazy(() => import('views/Discussions Page/Discussions')));
const Learn = Loadable(lazy(() => import('views/Learn Page/Learn')));
const Models = Loadable(lazy(() => import('views/Model Page/Models')));
const Host = Loadable(lazy(() => import('views/Host Competition/Host')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'default',
      children: [
        {
          path: 'default',
          element: <ExploreOutlinedIcon />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    // {
    //   path: 'sample-page',
    //   element: <SamplePage />
    // },
    {
      path: 'terms-of-use',
      element: <Term />
    },
    {
      path: 'team',
      element: <Team />
    },
    {
      path: 'rankings',
      element: <Rankings />
    },
    {
      path: 'privacy',
      element: <Privacy />
    },
    {
      path: 'blog',
      element: <Blog />
    },
    {
      path: 'docs',
      element: <Docs />
    },
    {
      path: 'contact',
      element: <Contact />
    },
    {
      path: 'code',
      element: <Code />
    },
    {
      path: 'competitions',
      element: <Competitions />
    },
    {
      path: 'datasets',
      element: <Datasets />
    },
    {
      path: 'discussions',
      element: <Discussions />
    },
    {
      path: 'learn',
      element: <Learn />
    },
    {
      path: 'models',
      element: <Models />
    },
    {
      path: 'host-a-competition',
      element: <Host />
    },
  ]
};

export default MainRoutes;
