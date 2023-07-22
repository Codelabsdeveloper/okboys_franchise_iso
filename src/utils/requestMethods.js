import axios from "axios";

export function fetchHeaders() {
  return {
    "Content-type": `application/json`,
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
}

function getCall(url, customHeader) {
  return axios
    .get(url, {
      headers: customHeader || fetchHeaders(),
    })
    .then((response) => handleSuccess(response));
}

function postCall(url, data, customHeader) {
  console.log("headers", fetchHeaders());
  console.log("headers url", url);
  console.log("headers data", data);
  return axios
    .post(url, data, {
      headers: customHeader || fetchHeaders(),
    })
    .then((response) => handleSuccess(response));
}
function putCall(url, data, customHeader) {
  return axios
    .put(url, data, {
      headers: customHeader || fetchHeaders(),
    })
    .then((response) => handleSuccess(response));
}
function deleteCall(url, customHeader = {}) {
  return axios
    .delete(url, {
      headers: customHeader || fetchHeaders(),
    })
    .then((response) => handleSuccess(response));
}

export const RequestMethod = {
  get: getCall,
  put: putCall,
  post: postCall,
  delete: deleteCall,
};

const handleSuccess = (res) => {
  // do any validations if required
  console.log("res handle success", res);
  return res;
};
