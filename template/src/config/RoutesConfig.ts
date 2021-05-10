import { RouteConfig } from "react-router-extended";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Dashboard from "../components/pages/Dashboard";

const routes: RouteConfig[] = [
    {
        key: "route-base-view",
        secure: false,
        path: "/",
        exact: true,
        component: Login,
        a11yMessage: "You have navigated to the Home Page",
        title: "JerryWithaZ - Home"
    },
    {
        key: "route-login-view",
        secure: false,
        path: "/login",
        component: Login,
        exact: true,
        a11yMessage: "You have navigated to the Login Page",
        title: "JerryWithaZ - Login"
    },
    {
        key: "route-home-ui",
        secure: false,
        path: "/home",
        component: Dashboard,
        exact: false,
        a11yMessage: "You have navigated to the Home Page",
        title: "JerryWithaZ - Home",
        routes: [
            {
                key: "route-home-view",
                secure: true,
                path: "/home",
                component: Home,
                exact: true,
                a11yMessage: "You have navigated to the Home Page",
                title: "JerryWithaZ - Home"
            },
            {
                key: "route-home-user-view",
                secure: true,
                path: "/user",
                component: Dashboard,
                exact: true,
                a11yMessage: "You have navigated to the User Page",
                title: "JerryWithaZ - User"
            }
        ]
    }
];

export default routes;

