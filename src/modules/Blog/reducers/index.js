import {GET_NEWS, SET_NEWS} from '../../../actionTypes';

const initialState = {
    news : [],
    newSelected: null,
};

const newsReducer = (data = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_NEWS:

        const blog = payload.blog.filter(product => Number(product.state) !== 2 && Number(product.type) === 0);

        blog.forEach(product => {
          product.images = payload.images.filter(image => image.blog === product.id);
        });

        return {...data, news: blog};
      case SET_NEWS:
        console.log(payload)
        return {...data, newSelected: payload};
      default:
        return data;
    }
  };
  
  export default newsReducer;