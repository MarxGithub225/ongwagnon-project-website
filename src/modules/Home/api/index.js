import http from "../../../httpCommon";

const getNews = () => {
    return http.get("/blog/get");
};
  

const getEvents = () => {
    return http.get("/event/get");
};