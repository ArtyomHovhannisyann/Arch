import HomePage from "./pages/Home/HomePage";
import Contact from "./pages/Studio/Contact";
import Jobs from "./pages/Studio/Jobs";
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
    {
        path:"/studio/jobs",
        isExact:true,
        component:Jobs
    },
    {
        path:"/studio/contact",
        isExact:true,
        component:Contact
    },
]
