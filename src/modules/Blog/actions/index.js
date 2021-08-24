import {GET_NEWS, SET_NEWS} from '../../../actionTypes';

import api from '../api';

export const getNews = () => async (dispatch) => {

  
  try {
    const { data } = await api.getNews();
    const dataImages = await api.getImages();

    const newsDatas = {
      blog: data.data,
      images: dataImages.data.data
    }
    dispatch({
      type: GET_NEWS,
      payload: newsDatas,
    });
  } catch (error) {
    console.log(error)
  }


};

export const updateNew = (data) => async (dispatch) => {

  await api.updateNew({...data, views: Number(data.views) + 1})


};


export const setNew = (data) => async (dispatch) => {

  dispatch({
    type: SET_NEWS,
    payload: data,
  });


};