import React from 'react'
import HeroSection from './HeroSection'
import About from './About'

const Home = () => {

  const abouts=[
    {
        key:"left",
        img:"/public/about images/img1.jpg",
        aboutTitle:"Creative Harmonious Living",
        aboutDesc:"ChicHaven products are all made to seamlessly fit into your day-to-day living, enhancing your space with comfort and style."
    },
    {
        key:"right",
        img:"/public/about images/img2.jpg",
        aboutTitle:"Comfortable and Elegant Living",
        aboutDesc:"ChicHaven products are all made to seamlessly fit into your day-to-day living, enhancing your space with comfort and style."
    }
]

  return (
    <div className='mt-5 md:mt-6'>
      <HeroSection/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita facere aperiam ab at labore porro. Alias qui sunt, illum recusandae dolor cum tempora deleniti animi maxime harum commodi maiores accusantium enim quisquam tempore repudiandae minima aliquam, perferendis quam dolorem odit explicabo veritatis distinctio tenetur. Nostrum praesentium, explicabo modi at eligendi vitae, veritatis quis tenetur eum cupiditate atque, hic esse. Quis omnis sunt voluptatem cumque itaque. Praesentium earum beatae id. Alias explicabo voluptate cum voluptatum maxime sapiente beatae at minus blanditiis. Unde libero eveniet ipsam fugiat aperiam eius atque. Voluptates qui fugit quia natus unde adipisci ipsa officiis nobis. Nobis.
     <About key={abouts[0].key} aboutKey={abouts[0].key} img={abouts[0].img} aboutTitle={abouts[0].aboutTitle} aboutdesc={abouts[0].aboutDesc}/>
    <div className=''>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae animi doloremque porro deleniti quia minima temporibus cupiditate sint! Vero esse, a consectetur veniam quos officiis voluptatum! Voluptatum optio, rerum fugit quod neque nisi, deleniti dicta ea accusamus reiciendis voluptas quis ipsam tempore laboriosam recusandae quasi labore hic, sed non eum. Vero nostrum consequatur laudantium, ipsum aperiam alias recusandae placeat facere praesentium, nam quis, voluptatum itaque nisi. Porro quos, assumenda praesentium quod veniam quae ab accusamus hic tenetur blanditiis vero recusandae magni sequi voluptas deleniti. Esse rem sapiente dolores autem alias voluptate earum. Cum excepturi mollitia ad, possimus libero repellendus at!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, labore.
      <About key={abouts[1].key} aboutKey={abouts[1].key} img={abouts[1].img} aboutTitle={abouts[1].aboutTitle} aboutdesc={abouts[1].aboutDesc}/>
    <div className=''></div>
    </div>
    </div>
  )
}

export default Home
