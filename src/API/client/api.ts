import axios from "axios";
import config from "../../Config";

const api = axios.create({
  baseURL: config.BackendApiURL,
});
export default api;
