import axios from "axios";

const apiHelper = (method, url, data) => {
  return axios({ method, url, data });
};

export default apiHelper;
