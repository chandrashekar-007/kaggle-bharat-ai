// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons';
// import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';

// constant
const icons = { IconBrandChrome, IconHelp,TableChartOutlinedIcon,EmojiEventsOutlinedIcon,CodeOutlinedIcon ,CommentOutlinedIcon,MilitaryTechOutlinedIcon ,AssignmentOutlinedIcon,BookOutlinedIcon ,GroupsOutlinedIcon,SecurityOutlinedIcon,InfoOutlinedIcon,AccountTreeOutlinedIcon  };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'dataset-page',
      title: 'Datasets ',
      type: 'item',
      url: '/datasets',
      icon: icons.TableChartOutlinedIcon,
      breadcrumbs: false
    },
    {
      id: 'models-page',
      title: 'Models ',
      type: 'item',
      url: '/models',
      icon: icons.AccountTreeOutlinedIcon,
      breadcrumbs: false
    },
    {
      id: 'code-page',
      title: 'Code ',
      type: 'item',
      url: '/code',
      icon: icons.CodeOutlinedIcon,
      breadcrumbs: false
    },
    {
      id: 'competitions-page',
      title: 'Competitions ',
      type: 'item',
      url: '/competitions',
      icon: icons.EmojiEventsOutlinedIcon,
      breadcrumbs: false
    },
    {
      id: 'learn-page',
      title: 'Learn ',
      type: 'item',
      url: '/learn',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'discussions-page',
      title: 'Discussions ',
      type: 'item',
      url: '/discussions',
      icon: icons.CommentOutlinedIcon,
      breadcrumbs: false
    },
    {
      id: 'rankings-page',
      title: 'Rankings',
      type: 'item',
      url: '/rankings',
      icon: icons.MilitaryTechOutlinedIcon,
      breadcrumbs: false
    },
    {
      id: 'docs-page',
      title: 'Documentation ',
      type: 'item',
      url: '/docs',
      icon: icons.AssignmentOutlinedIcon,
      breadcrumbs: false
    },
    {
      id: 'host-page',
      title: 'Host-a-Competition ',
      type: 'item',
      url: '/host-a-competition',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'blog-page',
      title: 'Blog',
      type: 'item',
      url: '/blog',
      icon: icons.BookOutlinedIcon,
      breadcrumbs: false
    },
    {
      id: 'team-page',
      title: 'Team',
      type: 'item',
      url: '/team',
      icon: icons.GroupsOutlinedIcon,
      breadcrumbs: false
    },
    {
      id: 'contact-page',
      title: 'Contact/Support',
      type: 'item',
      url: '/contact',
      icon: icons.InfoOutlinedIcon,
      breadcrumbs: false
    },
    {
      id: 'terms-page',
      title: 'Terms of use ',
      type: 'item',
      url: '/terms-of-use',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'privacy-page',
      title: 'Privacy',
      type: 'item',
      url: '/privacy',
      icon: icons.SecurityOutlinedIcon,
      breadcrumbs: false
    },
    // {
    //   id: 'sample-page',
    //   title: 'Sample Page',
    //   type: 'item',
    //   url: '/sample-page',
    //   icon: icons.IconBrandChrome,
    //   breadcrumbs: false
    // },
    // {
    //   id: 'documentation',
    //   title: 'Documentation',
    //   type: 'item',
    //   url: 'https://codedthemes.gitbook.io/berry/',
    //   icon: icons.IconHelp,
    //   external: true,
    //   target: true
    // }
  ]
};

export default other;
