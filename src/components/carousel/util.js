export const NEXT = 'NEXT';
export const PREV = 'PREV';
export const RESET = 'RESET';
export const STOP = 'STOP';
export const INIT = 'INIT';
export const transitionThreshold = 5;
export const transformThreshold = 30;
export const timeoutDuration = 50;
export const threeQuarter = 0.75;

export function getTransform(state) {
  if (state) {
    if (!state.sliding) {
      return `translateX(${state.currentTransform}px)`;
    }

    if (state.dir === NEXT)
      return `translateX(${state.currentTransform - transitionThreshold}px)`;

    if (state.dir === PREV)
      return `translateX(${state.currentTransform + transitionThreshold}px)`;
  }

  return 'translateX(0)';
}

export function getTransition(state) {
  return state.sliding ? 'transform 1s ease' : 'transform 400ms ease-out';
}

export function showPrev(state) {
  return state.currentTransform !== 0;
}

export function showNext(state) {
  return (
    state.currentTransform !==
    state.wrapperWidth - state.scrollWidth - transformThreshold
  );
}

export function showCarousel(state) {
    return state.scrollWidth > Math.ceil(state.wrapperWidth);
}