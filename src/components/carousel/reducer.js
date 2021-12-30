import {
    NEXT,
    PREV,
    RESET,
    INIT,
    STOP,
    transformThreshold,
    threeQuarter
  } from './util';
  
  export function getPrevCurrentTransform({ current, width }) {
    const newTransform = current + width * threeQuarter - transformThreshold;
  
    if (newTransform < 0) {
      return newTransform;
    }
  
    return 0;
  }
  
  export function getNextCurrentTransform({ current, width, scroll }) {
    const diff = scroll - width;
    const newTransform = current - width * threeQuarter;
  
    if (Math.abs(current) < diff && Math.abs(newTransform) < diff) {
      return newTransform;
    }
  
    return -diff - transformThreshold;
  }
  
  export const initialState = {
    sliding: false,
    dir: RESET,
    currentTransform: 0,
    wrapperWidth: 0,
    scrollWidth: 0
  };
  
  export function reducer(state, { type, wrapperWidth, scrollWidth }) {
    const {
      currentTransform: current,
      wrapperWidth: width,
      scrollWidth: scroll
    } = state;
  
    switch (type) {
      case RESET:
        return initialState;
      case INIT:
        return {
          ...state,
          wrapperWidth,
          scrollWidth
        };
      case PREV:
        return {
          ...state,
          dir: PREV,
          sliding: true,
          currentTransform: getPrevCurrentTransform({ current, width })
        };
      case NEXT:
        return {
          ...state,
          dir: NEXT,
          sliding: true,
          currentTransform: getNextCurrentTransform({ current, width, scroll })
        };
      case STOP:
        return { ...state, sliding: false };
      default:
        return state;
    }
  }