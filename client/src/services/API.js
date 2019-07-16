const API_URL = "http://localhost:8000/api";

export const API = {
  getDestinations: () => {
    return get(`/destinations`).then(res => {
      return res.json();
    });
  },
  userLogin: body => {
    return post(`/login`, body).then(res => {
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

const post = (url, body) => {
  return fetch(`${API_URL}${url}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};
