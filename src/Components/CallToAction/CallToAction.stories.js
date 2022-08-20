import React from 'react';
import CallToAction from './CallToAction';

export default {
  title: 'CallToAction',
  component: CallToAction,
};

export const callToAction = () => (
  <CallToAction
    text={<p>Lorem ipsum dolor sit <span className='featured-text'>amet consectetur</span> adipisicing elit?</p>}
    textButton='Clique aqui'
    href='#'
  />
)
