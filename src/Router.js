import HomePage from "./pages/Home/HomePage";
import StudioTeam from "./pages/Studio/StudioTeam";

export const routes = [
    {
        path: "/home",
        isExact: true,
        component: HomePage,
    },
    {
        path:"/studio/team",
        isExact:true,
        component:StudioTeam
    },
]
