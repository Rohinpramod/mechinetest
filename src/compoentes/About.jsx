import React from 'react'
import AboutImg from '../assets/aboutUs.webp'

const About = () => {
  return (
    <div className='m-5 text-black'>
      <h2 className='font-bold text-3xl'>About Us</h2>
      <div className='flex'>
          <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio molestiae alias recusandae, cum voluptatem tempore eveniet fugiat at dicta fugit in! Quis cumque repellendus sequi magnam sapiente ut minus.
          Suscipit exercitationem corrupti ducimus nemo quas accusamus ratione quod, amet iure cumque consectetur alias repudiandae delectus possimus quo nihil veniam magnam modi illo beatae neque facere quam quidem. Eveniet, velit.
          Ex dolorum quo expedita odio laudantium cum voluptatum dolore aperiam quaerat ipsum similique omnis illo deleniti aspernatur natus possimus, neque illum dignissimos, corporis asperiores iure hic sint consequatur dolorem? At.
          Eligendi, esse at voluptatum nesciunt quae quasi itaque sapiente reprehenderit, enim dolorum magnam repellendus natus necessitatibus veritatis perferendis quod dicta possimus ea odit fuga autem minus et alias. Eum, fuga?
          Dolorem aspernatur atque hic amet et eaque consectetur suscipit facilis vitae vero nam mollitia est nemo a ipsum ab alias nostrum dicta nisi laboriosam, maxime neque laudantium quod incidunt. Nobis?</p>
          <h2 className='text-2xl mt-2 font-bold'>Fitness goals:</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat natus amet aut quos, distinctio harum voluptates soluta vitae porro mollitia voluptatum illo incidunt in tempore doloremque odio eos. Rerum, eligendi.</p>
          </div>
          <div>
            <img src={AboutImg} className='w-1000'>
            </img>
          </div>
      </div>
      
      
      
    </div>
  )
}

export default About