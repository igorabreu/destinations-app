const API_URL = "http://localhost:8000/api";

export const API = {
  createUser: body => {
    return post(`/users`, body).then(res => {
      return res.json();
    });
  },
  userLogin: body => {
    return post(`/login`, body).then(res => {
      return res.json();
    });
  },
  getDestinations: () => {
    return get(`/destinations`).then(res => {
      return res.json();
    });
  },
  createNewDestination: body => {
    return post(`/destinations`, body).then(res => {
      return res.json();
    });
  },
  deleteDestination: id => {
    return remove(`/destinations`, id).then(res => {
      return res.json();
    });
  },
  editDestination: (id, body) => {
    return patch(`/destinations`, id, body).then(res => {
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

const remove = (url, id) => {
  return fetch(`${API_URL}${url}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

const patch = (url, id, body) => {
  return fetch(`${API_URL}${url}/${id}`, {
    method: "PATCH",
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
