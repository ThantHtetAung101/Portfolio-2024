import React from 'react'
import painting from '../assets/images/painting.jpg'
import christmas from '../assets/images/christmas-pj.png'
import portfolioMaker from '../assets/images/portfolio-maker.png'
import blogWeb from '../assets/images/blog-web.jpg'
import asiaFoodDashboard from '../assets/images/asia-food.png'
import asiaFoodPOS from '../assets/images/asiafood-pos.png'

const Projects = () => {
  const showProject = (name) => {
    let previewProject = document.getElementById('preview-project')
    console.log(name);
    switch (name) {
      case 'blogWeb':
        previewProject.src = blogWeb
        break;
      case 'christmas':
        previewProject.src = christmas
        break;
      case 'portfolioMaker':
        previewProject.src = portfolioMaker
        break;
      case 'asiaFoodDashboard':
        previewProject.src = asiaFoodDashboard
        break;
      case 'asiaFoodPOS':
        previewProject.src = asiaFoodPOS
        break;
      default:
        previewProject.src = painting
        break;
    }
  }
  return (
    <div className="h-screen relative flex bg-black" id='project-part'>
      <div className="ms-5 flex flex-col justify-evenly h-full">
        <a href='https://github.com/ThantHtetAung101/Hoyoverse-Myanmar-Facebook-Page-Articles' target='_blank' className="text-6xl amiah hover:text-white transition cursor-pointer" onMouseOver={() => showProject('blogWeb')}>Facebook Page Blog Web</a>
        <a href='https://github.com/ThantHtetAung101/christmas-mailbox-frontend' target='_blank' className="text-6xl amiah hover:text-white transition cursor-pointer" onMouseOver={() => showProject('christmas')}>
          Christmas Mailbox
        </a>
        <a href='https://bs-portfolio-maker.netlify.app/' target='_blank' className="text-6xl amiah hover:text-white transition cursor-pointer" onMouseOver={() => showProject('portfolioMaker')}>Portfolio Maker</a>
        <a href='https://www.facebook.com/JpMyanmarFood' target='_blank' className="text-6xl amiah cursor-pointer">
          <span className="hover:text-white transition" onMouseOver={() => showProject('asiaFoodDashboard')}>Asia Food E Commerce</span>
          &nbsp;&
          <span className="hover:text-white transition" onMouseOver={() => showProject('asiaFoodPOS')}> POS</span>
        </a>

      </div>
      <div className='h-[500px] flex items-center mt-24'>
        <img src={painting} alt="pj" className='w-[500px]' id='preview-project' />
      </div>
    </div>
  )
}

export default Projects