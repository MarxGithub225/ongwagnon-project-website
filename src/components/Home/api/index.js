import http from "../../../httpCommon";

const makeDonation = (data) => {
    return http.post("/don/register", data);
};

const api = {
    makeDonation
};
  
export default api;