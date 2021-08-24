import http from "../../../httpCommon";

const sendMessage = (data) => {
    return http.post("/tool/sendmessage", data);
};

const api = {
    sendMessage
};
  
export default api;