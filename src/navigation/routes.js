import { Profile, Home, Login, Registration } from "../views";

const routes = [
    {
        path: '/home',
        component: Home, 
        options: {
            drawerShown: true,
        }
    },
    {
        path: '/user/profile', 
        component: Profile,
        options: {
            drawerShown: true,
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Registration
    }
]

export default routes;