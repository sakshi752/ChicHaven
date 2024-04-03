import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import ProudProducts from './ProudProducts'
import TrendingProducts from './TrendingProducts'

const Home = () => {

  const abouts = [
    {
      key: "left",
      img: "/public/about images/img1.jpg",
      aboutTitle: "Creative Harmonious Living",
      aboutDesc: "ChicHaven products are all made to seamlessly fit into your day-to-day living, enhancing your space with comfort and style."
    },
    {
      key: "right",
      img: "/public/about images/img2.jpg",
      aboutTitle: "Comfortable and Elegant Living",
      aboutDesc: "ChicHaven products are all made to seamlessly fit into your day-to-day living, enhancing your space with comfort and style."
    }
  ]

  return (
    <div className='mt-5 md:mt-6'>
      <HeroSection />
      <ProudProducts />
      <About key={abouts[0].key} aboutKey={abouts[0].key} img={abouts[0].img} aboutTitle={abouts[0].aboutTitle} aboutdesc={abouts[0].aboutDesc} />

      <TrendingProducts/>

      <About key={abouts[1].key} aboutKey={abouts[1].key} img={abouts[1].img} aboutTitle={abouts[1].aboutTitle} aboutdesc={abouts[1].aboutDesc} />
      <div className=''></div>
    </div>

  )
}

export default Home
