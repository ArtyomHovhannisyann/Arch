export const generalUrl = "http://192.168.0.207:3008";
export const GET_PICTURES = `${generalUrl}/api/data/pictures`;
export const GET_VIDEOS = `${generalUrl}/api/data/videos`;
export const GET_TEAM = `${generalUrl}/api/data/team`;
export const GET_MEMBERS = `${generalUrl}/api/data/members`;
export const GET_PROJECTS = (type,category)=>`${generalUrl}/api/data/projects?type=${type}&category=${category}`
