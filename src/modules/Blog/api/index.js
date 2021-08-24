import http from "../../../httpCommon";

const getNews = () => {
    return http.get("/blog/get");
};


const getImages = () => {
    return http.get("/image/get");
};


const updateNew = (data) => {
    return http.put("/blog/update", data);
};

const api = {
    getNews,
    getImages,
    updateNew
};
  
export default api;