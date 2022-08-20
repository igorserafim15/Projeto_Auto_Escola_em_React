import React from 'react';
import FilledButton from './FilledButton';
import OutlinedButton from './OutlinedButton';
import TextButton from './TextButton';

export default {
  title: 'Buttons',
  component: FilledButton,
  component: OutlinedButton,
  component: TextButton
}

export const filledButton = () => (
  <FilledButton
    text='Clique aqui'
    href='#'
  />
)

export const outlinedButton = () => (
  <OutlinedButton
    text='Clique aqui'
    href='#'
  />
)

export const textButton = () => (
  <TextButton
    text='Clique aqui'
    href='#'
  />
)