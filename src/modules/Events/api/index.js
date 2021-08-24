import http from "../../../httpCommon";

const getEvents = () => {
    return http.get("/event/get");
};


const api = {
    getEvents
};
export default api;