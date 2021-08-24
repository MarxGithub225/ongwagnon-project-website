import {GET_EVENTS} from '../../../actionTypes';

const initialState = {
    events : []
};

const eventReducer = (data = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_EVENTS:
        return {...data, events: payload};
  
  
      default:
        return data;
    }
  };
  
  export default eventReducer;