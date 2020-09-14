import Home from 'Routes/Home';
import Dames from 'Routes/Dames';
import Heren from 'Routes/Heren';
import Producten from 'Routes/Producten';
import Team from 'Routes/Team';
import Redirect from 'Routes/Redirect';
import NotFound from 'Routes/NotFound';

const Routes = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/dames',
        component: Dames,
    },
    {
        path: '/heren',
        component: Heren,
    },
    {
        path: '/producten',
        component: Producten,
    },
    {
        path: '/team',
        component: Team,
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
