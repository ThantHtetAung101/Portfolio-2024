import React from 'react'

const Projects = () => {
  const showProject = (name) => {
    let previewProject = document.getElementById('preview-project')
    console.log(name);
    switch (name) {
      case 'blogWeb':
        previewProject.src = 'https://i.imgur.com/sG8qgdK.jpg'
        break;
      case 'christmas':
        previewProject.src = 'https://i.imgur.com/Jjyh6yj.png'
        break;
      case 'portfolioMaker':
        previewProject.src = 'https://i.imgur.com/n8ybZtH.png'
        break;
      case 'asiaFoodDashboard':
        previewProject.src = 'https://i.imgur.com/niwTX2C.png'
        break;
      case 'asiaFoodPOS':
        previewProject.src = 'https://i.imgur.com/bP81rzL.png'
        break;
      default:
        previewProject.src = 'https://i.imgur.com/d8zNno5.jpg'
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