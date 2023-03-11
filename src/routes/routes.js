import config from '~/config';
import Today from '~/pages/Today';
import Week from '~/pages/Week';

//Public routes
const publicRoutes = [
    { path: config.routes.today, component: Today },
    { path: config.routes.week, component: Week },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
