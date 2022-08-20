import React from 'react';
import IconDescription from './IconDescription';
import {ReactComponent as Icon} from '../../assets/icon-check.svg'

export default {
  title: 'IconDescription',
  component: IconDescription,
};

export const iconDescription = () => (
  <IconDescription
    icon={<Icon />}
    title='Pagamentos'
    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi suscipit cupiditate quae temporibus!'
  />
)
