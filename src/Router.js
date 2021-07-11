//Home
import HomePage from "./pages/Home/HomePage";

//Studio
import Contact from "./pages/Studio/Contact";
import Jobs from "./pages/Studio/Jobs";
import StudioTeam from "./pages/Studio/StudioTeam";

//Apartaments
import ApartamentsSelectedProjects from "./pages/Apartaments/ApartamentsSelectedProjects";
import ApartamentsInProgressProject from "./pages/Apartaments/ApartamentsInProgressProject";

export const routes = [
    //Home
    {
        path: "/home",
        isExact: true,
        component: HomePage,
    },
    //Studio
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
    // Apartments
    {
        path:"/apartaments/selected-projects",
        isExact:true,
        component:ApartamentsSelectedProjects
    },
    {
        path:"/apartaments/in-progress-projects",
        isExact:true,
        component:ApartamentsInProgressProject
    },
]
