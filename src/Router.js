//Home
import HomePage from "./pages/Home/HomePage";

//Studio
import Contact from "./pages/Studio/Contact";
import Jobs from "./pages/Studio/Jobs";
import StudioTeam from "./pages/Studio/StudioTeam";

//Apartaments
import ApartamentsSelectedProjects from "./pages/Apartaments/ApartamentsSelectedProjects";
import ApartamentsInProgressProject from "./pages/Apartaments/ApartamentsInProgressProject";

import HousesSelectedProjects from "./pages/Houses/HousesSelectedProjects";
import HousesInProgressProjects from "./pages/Houses/HousesInProgressProjects";
import ResidentialAndPublicProjectsSelectdedProjects from "./pages/ResidentialAndPublicProjects/ResidentialAndPublicProjectsSelectdedProjects";

import ResidentialAndPublicProjectsInProgressProjects from "./pages/ResidentialAndPublicProjects/ResidentialAndPublicProjectsInProgressProjects";

import LandscapeArchitectureSelectedProjects from "./pages/Landscape/LandscapeArchitectureSelectedProjects";
import LandscapeArchitectureInProgressProjects from "./pages/Landscape/LandscapeArchitectureInProgressProjects";
import Project from "./components/Project/Project";

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
    //Houses
    {
        path:"/houses/selected-projects",
        isExact:true,
        component:HousesSelectedProjects
    },
    {
        path:"/houses/in-progress-projects",
        isExact:true,
        component:HousesInProgressProjects
    },
    // Residential And Public Projects
    {
        path:"/residential-and-public-projects/selected-projects",
        isExact:true,
        component:ResidentialAndPublicProjectsSelectdedProjects
    },
    {
        path:"/residential-and-public-projects/in-progress-projects",
        isExact:true,
        component:ResidentialAndPublicProjectsInProgressProjects
    },
    //Landscape Architecture
    {
        path:"/landscape/selected-projects",
        isExact:true,
        component:LandscapeArchitectureSelectedProjects
    },
    {
        path:"/landscape/in-progress-projects",
        isExact:true,
        component:LandscapeArchitectureInProgressProjects
    },
    //Project
    {
        path:"/project/:id",
        isExact:true,
        component:Project
    }
]
