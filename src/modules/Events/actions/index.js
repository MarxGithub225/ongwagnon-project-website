import {GET_EVENTS} from '../../../actionTypes';

import api from '../api';

export const getEvents = () => async (dispatch) => {

  
  try {
    const { data } = await api.getEvents();

    console.log(data)
    dispatch({
      type: GET_EVENTS,
      payload: data.data,
    });
  } catch (error) {
    console.log(error)
  }


};