import React from  'react';
import ProductCard from  './ProductCard';
import christmasTreeImage from './christmas_tree.jpg'

const story =  {
    title: 'Example/ProductCard',
    component: ProductCard,
  };

export default story

const Template = (args) => <ProductCard {...args} />;
export const Primary =  Template.bind({});

Primary.args = {
    label: "Christmas Trees",
    picture: christmasTreeImage,
    buttonLabel: 'SHOP NOW'
}


   

