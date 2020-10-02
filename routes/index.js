import homeRoutes from './homeRoutes';
import tasksRoutes from './tasksRoutes';
import usersRoutes from './usersRoutes';

export default {
  '/': homeRoutes,
  '/tasks': tasksRoutes,
  '/users': usersRoutes,
};
