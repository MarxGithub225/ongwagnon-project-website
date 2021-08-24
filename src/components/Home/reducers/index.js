import {SEND_MESSAGE_FAILED, SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_SUCCESS} from '../../../actionTypes';

const initialState = {
    loading: false,
    failed: false,
    success: false
};

const newsReducer = (data = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case SEND_MESSAGE_REQUEST:

        return {...data, loading: true};
      case SEND_MESSAGE_SUCCESS:
        return {...data, success: true, loading: false};
      case SEND_MESSAGE_FAILED:
        return {...data, failed: true, loading: false};
      default:
        return data;
    }
  };
  
  export default newsReducer;