import React from 'react';
import HeroImages from './HeroImages';

const HeroSection = () => {

const heroImages=[
    {
        key:'img1',
        img:"public/hero images/live comfortably.jpg",
        imgTitle:"Live Comfortably"
    },
    {
        key:'img2',
        img:"public/hero images/lamps.jpg",
        imgTitle:"Lamps"
    },
    {
        key:'img3',
        img:"public/hero images/plants.jpg",
        imgTitle:"Plants"
    },
    {
        key:'img4',
        img:"public/hero images/soft toys.jpg",
        imgTitle:"Soft Toys"
    },
]
  return (
    <div className='grid grid-cols-2 gap-2'>
     {heroImages.map((heroImage)=><HeroImages key={heroImage.key} img={heroImage.img} imgTitle={heroImage.imgTitle}/>)}
    </div>
  );
};

export default HeroSection;
