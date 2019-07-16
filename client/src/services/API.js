const API_URL = "http://localhost:8000/api";

export const API = {
  getDestinations: () => {
    return get(`/destinations`).then(res => {
      return res.json();
    });
  },
  login: () => {
    return post(`/login`).then(res => {
      return res.json();
    });
  }
};

const get = url => {
  return fetch(`${API_URL}${url}`, { method: "GET" })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
    });
};
