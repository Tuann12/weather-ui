import Today from '~/pages/Today';
import Week from '~/pages/Week';

//Public routes
const publicRoutes = [
    { path: '/', component: Today },
    { path: '/week', component: Week },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
