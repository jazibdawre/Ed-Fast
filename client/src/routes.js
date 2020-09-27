import Course from 'views/Course.js';
import StudentRegisteration from 'views/StudentRegisteration.js';
import Content from 'views/Content.js';
import Typography from 'views/Typography.js';
import TableList from 'views/Tables.js';
import Signup from 'views/Signup.js';
import Login from 'views/Login.js';
import ProfessorRegisteration from 'views/ProfessorRegisteration.js';
import Home from 'views/Home.js';

var routes = [
  {
    path: '/home',
    name: 'Home',
    icon: 'nc-icon nc-bank',
    component: Home,
    layout: '/admin',
    hidden: false,
  },
  {
    path: '/course',
    name: 'Course',
    icon: 'nc-icon nc-pin-3',
    component: Course,
    layout: '/admin',
    hidden: false,
  },
  {
    path: '/content',
    name: 'Video',
    icon: 'nc-icon nc-button-play',
    component: Content,
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
    path: '/login',
    name: 'Login',
    icon: 'nc-icon nc-pin-3',
    component: Login,
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
    path: '/quiz',
    name: 'Quiz',
    icon: 'nc-icon nc-single-copy-04',
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
    hidden: true,
  },
];
export default routes;
