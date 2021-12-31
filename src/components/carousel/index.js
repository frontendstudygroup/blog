import React, { useRef, useEffect, useReducer } from 'react';
import { useSwipeable } from 'react-swipeable';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import { reducer, initialState } from './reducer';
import {
  NEXT,
  PREV,
  INIT,
  STOP,
  timeoutDuration,
  getTransform,
  getTransition,
  showPrev,
  showNext,
  showCarousel
} from './util';
import './carousel.css';

/**
 * Component to render Carousel
 *
 * @visibleName Carousel
 * @description This is the shared component we are using to render a carousel
 * @function Carousel
 * @param {Object} props The properties for this component
 * @param {React.Node} props.children elements passed as children to the component, which will be rendered in the carousel
 * @param {string} props.dataTest a key to add a data-test property for testing
 * @public
 */

export const Carousel = ({ children, dataTest }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const wrapperElement = useRef(null);
  const slide = dir => {
    dispatch({ type: dir });
    setTimeout(() => {
      dispatch({ type: STOP });
    }, timeoutDuration);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => slide(NEXT),
    onSwipedRight: () => slide(PREV),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  const showControls = () => {
    const prevStyle = classnames('control', 'control-prev');
    const nextStyle = classnames('control', 'control-next');

    return (
      <>
        {showPrev(state) && (
          <div className={prevStyle} onClick={() => slide(PREV)} />
        )}
        {showNext(state) && (
          <div className={nextStyle} onClick={() => slide(NEXT)} />
        )}
      </>
    );
  };

  useEffect(() => {
    const wrapper = wrapperElement.current;

    dispatch({
      type: INIT,
      wrapperWidth: wrapper.getBoundingClientRect().width,
      scrollWidth: wrapper.scrollWidth
    });
  }, [children]);

  return (
    <div {...handlers} className="container">
      <div className="wrapper" ref={wrapperElement}>
        <div
          className="childrenWrapper"
          style={{
            transition: getTransition(state),
            transform: getTransform(state)
          }}
          data-test={dataTest}
        >
          {children}
        </div>
      </div>
      {showCarousel(state) && showControls()}
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  dataTest: PropTypes.string
};