import {GET_NEWS, GET_EVENTS} from '../../../actionTypes';

const initialState = {
    news : [],
    events : [],
};

const eventReducer = (data = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_NEWS:
        return {...data, news: payload};
  
  
      default:
        return data;
    }
  };
  
  export default eventReducer;