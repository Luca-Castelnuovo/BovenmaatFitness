import Home from 'Routes/Home';
import Redirect from 'Routes/Redirect';
import NotFound from 'Routes/NotFound';

const Routes = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/redirect/:src',
        component: Redirect,
    },
    {
        component: NotFound,
    },
];

export default Routes;
