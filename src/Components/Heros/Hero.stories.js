import React from 'react';
import FilledButton from '../Buttons/FilledButton';
import Hero from './Hero';

export default {
  title: 'Hero',
  component: Hero,
};

export const hero = () => (
  <Hero
    title='Tenha aulas com os melhores instrutores'
    description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ratione similique nihil ex, recusandae dignissimos!'
    other={
      <FilledButton
        text='Clique aqui'
        href='#'
      />
    }
  />
)
