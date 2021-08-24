import {SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILED} from '../../../actionTypes';

import api from '../api';

export const createMember = (data) => async (dispatch) => {

  dispatch({
    type: SEND_MESSAGE_REQUEST
  });

  try {
    const res = await api.createMember(data);
    
    if(res.data.status) {
      dispatch({
        type: SEND_MESSAGE_SUCCESS,
      });
    }else {
      dispatch({
        type: SEND_MESSAGE_FAILED,
      });
    }
    
  } catch (error) {
    console.log('Send Message Error', error)

    dispatch({
      type: SEND_MESSAGE_FAILED,
    });
  }


};
