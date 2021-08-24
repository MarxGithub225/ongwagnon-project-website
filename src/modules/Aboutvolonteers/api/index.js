import http from "../../../httpCommon";

const createMember = (data) => {
    return http.post("/member/register", data);
};

const api = {
    createMember
};
  
export default api;