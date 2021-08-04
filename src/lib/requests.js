import { request } from "./a-lib";
import {
  ADD_MEMBER,
  DEL_MEMBER,
  DEL_PICTURE,
  DEL_VIDEO,
  EDIT_MEMBER,
  GET_MEMBERS,
  GET_PICTURES,
  GET_TEAM,
  GET_VIDEOS,
  GET_PROJECTS,
  GET_JOBS,
  GET_CONTACT,
  GET_PROJECT_BY_ID,
} from "./constants";

export async function getHomePagePictures(callBack) {
  const info = {
    url: GET_PICTURES,
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    let pictures = await request(info);
    callBack(pictures.data.data);
  } catch (err) {
    console.error(err);
  }
}
export async function getHomePageVideos(callBack) {
  const info = {
    url: GET_VIDEOS,
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    let videos = await request(info);
    callBack(videos.data.data);
  } catch (err) {
    console.error(err);
  }
}
export async function getStudioTeam(callBack) {
  const info = {
    url: GET_TEAM,
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    let teamItems = await request(info);
    callBack(teamItems.data.data);
  } catch (err) {
    console.error(err);
  }
}
export async function getStudioMembers(callBack) {
  const info = {
    url: GET_MEMBERS,
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    let teamItems = await request(info);
    callBack(teamItems.data.data);
  } catch (err) {
    console.error(err);
  }
}
export async function getJobs(callBack) {
  const info = {
    url: GET_JOBS,
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    let teamItems = await request(info);
    callBack(teamItems.data.data);
  } catch (err) {
    console.error(err);
  }
}
export async function getContacts(callBack) {
  const info = {
    url: GET_CONTACT,
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    let teamItems = await request(info);
    callBack(teamItems.data.data);
  } catch (err) {
    console.error(err);
  }
}
export async function getProjectById(callBack, id) {
  const info = {
    url: GET_PROJECT_BY_ID(id),
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
    callBack(res.data.data);
  } catch (err) {
    console.error(err);
  }
}
export async function getProjects(callBack, type, category) {
  const info = {
    url: GET_PROJECTS(type, category),
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
    callBack(res.data.data);
  } catch (err) {
    console.error(err);
  }
}
