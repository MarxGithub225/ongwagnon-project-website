import {GET_NEWS, GET_EVENTS} from '../../../actionTypes';

import api from '../api';

export const getNews = () => async (dispatch) => {

    try {
        const res = await api.getNews();
    
        dispatch({
          type: GET_NEWS,
          payload: res.data,
        });
      } catch (err) {
        console.log(err);
    }

}


export const getEvents = () => async (dispatch) => {

    try {
        const res = await api.getEvents();
    
        dispatch({
          type: GET_EVENTS,
          payload: res.data,
        });
      } catch (err) {
        console.log(err);
    }

}