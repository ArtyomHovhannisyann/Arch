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
  RESET_PASSWORD,
  RESET_PASSWORD_CODE,
  RESET_PASSWORD_SEND_PASSWORD,
  SEND_LOG_IN,
  SET_PICTURE,
  SET_TEAM,
  SET_VIDEOS,
  GET_PROJECTS,
  GET_JOBS,
  GET_CONTACT,
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
export async function getApartamentsSelectedProjects(callBack) {
  const info = {
    url: GET_PROJECTS(1, 1),
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
    callBack(res);
  } catch (err) {
    console.error(err);
  }
}
export async function getApartamentsInProgressProjects(callBack) {
  const info = {
    url: GET_PROJECTS(2, 1),
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
    callBack(res);
  } catch (err) {
    console.error(err);
  }
}
export async function getHousesSelectedProjects(callBack) {
  const info = {
    url: GET_PROJECTS(1, 2),
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
    callBack(res);
  } catch (err) {
    console.error(err);
  }
}
export async function getHousesInProgressProjects(callBack) {
  const info = {
    url: GET_PROJECTS(2, 2),
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
    callBack(res);
  } catch (err) {
    console.error(err);
  }
}
export async function getResidentialSelectedProjects(callBack) {
  const info = {
    url: GET_PROJECTS(1, 3),
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
    callBack(res);
  } catch (err) {
    console.error(err);
  }
}
export async function getResidentialInProgressProjects(callBack) {
  const info = {
    url: GET_PROJECTS(2, 3),
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
    callBack(res);
  } catch (err) {
    console.error(err);
  }
}
export async function getLandscapeSelectedProjects(callBack) {
  const info = {
    url: GET_PROJECTS(1, 4),
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
    callBack(res);
  } catch (err) {
    console.error(err);
  }
}
export async function getLandscapeInProgressProjects(callBack) {
  const info = {
    url: GET_PROJECTS(2, 4),
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
    callBack(res);
  } catch (err) {
    console.error(err);
  }
}
