import axios from "axios";

export default axios.create({
  baseURL: "https://api.ong-wagnon.org/routes/",
  headers: {
    "Content-type": "application/json"
  }
});