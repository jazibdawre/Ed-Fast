import Dashboard from 'views/Dashboard.js';
import StudentRegisteration from 'views/StudentRegisteration.js';
import Icons from 'views/Icons.js';
import Typography from 'views/Typography.js';
import TableList from 'views/Tables.js';
import Signup from 'views/Signup.js';
import ProfessorRegisteration from 'views/ProfessorRegisteration.js';
import UpgradeToPro from 'views/Upgrade.js';

var routes = [
  {
    path: '/course',
    name: 'Course',
    icon: 'nc-icon nc-bank',
    component: Dashboard,
    layout: '/admin',
    hidden: false,
  },
  {
    path: '/content',
    name: 'Video',
    icon: 'nc-icon nc-diamond',
    component: Icons,
    layout: '/admin',
    hidden: false,
  },
  {
    path: '/signup',
    name: 'Signups',
    icon: 'nc-icon nc-pin-3',
    component: Signup,
    layout: '/admin',
    hidden: true,
  },
  {
    path: '/studentRegisteration',
    name: 'StudentRegisteration',
    icon: 'nc-icon nc-bell-55',
    component: StudentRegisteration,
    layout: '/admin',
    hidden: true,
  },
  {
    path: '/professorRegisteration',
    name: 'ProfessorRegisteration',
    icon: 'nc-icon nc-single-02',
    component: ProfessorRegisteration,
    layout: '/admin',
    hidden: true,
  },
  {
    path: '/tables',
    name: 'Table List',
    icon: 'nc-icon nc-tile-56',
    component: TableList,
    layout: '/admin',
    hidden: false,
  },
  {
    path: '/typography',
    name: 'Typography',
    icon: 'nc-icon nc-caps-small',
    component: Typography,
    layout: '/admin',
    hidden: false,
  },
  {
    pro: true,
    path: '/upgrade',
    name: 'Upgrade to PRO',
    icon: 'nc-icon nc-spaceship',
    component: UpgradeToPro,
    layout: '/admin',
    hidden: false,
  },
];
export default routes;
