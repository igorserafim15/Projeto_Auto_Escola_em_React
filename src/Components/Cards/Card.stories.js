import React from 'react'
import Card from './Card'
import { ReactComponent as Icon }  from '../../assets/icon-check.svg'

export default {
  title: 'Card',
  component: Card,
};

export const card = () => <Card 
  icon={<Icon />}
  title='Melhor preço da cidade'
  description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor.'
  textButton='Clique aqui'
  href='#'
/>
