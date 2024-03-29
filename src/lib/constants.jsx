export const generalUrl = "https://api.anarch.am";
export const GET_PICTURES = `${generalUrl}/api/data/pictures`;
export const GET_VIDEOS = `${generalUrl}/api/data/videos`;
export const GET_TEAM = `${generalUrl}/api/data/team`;
export const GET_MEMBERS = `${generalUrl}/api/data/members`;
export const GET_JOBS = `${generalUrl}/api/data/jobs`;
export const GET_CONTACT = `${generalUrl}/api/data/contacts`;
export const GET_PROJECTS = (type, category) => `${generalUrl}/api/data/projects?type=${type}&category=${category}`
export const GET_PROJECT_BY_ID = (id) => `${generalUrl}/api/data/projects/${id}`
