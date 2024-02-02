import React from 'react'

const AboutMe = () => {
  return (
    <div className='h-screen relative' id='about-part'>
      <div className="flex gap-5 ms-10 pt-5">
        <h1 className="text-8xl amiah flex flex-col">
          <span>A</span>
          <span>B</span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
          <span>M</span>
          <span>E</span>
        </h1>
        <span className="dm-san w-[1000px]">
          <div className="flex">
            <div>
              <span className="text-lg">
                ❝ Behalte treu die Träume deiner Jugend. ❞
              </span><br />
              <span className="text-3xl ms-10">
                ❝ Keep true to the dreams of your youth. ❞
              </span>
            </div>
            <span className="text-xl ms-10">
              - Friedrich Schiller
            </span>
          </div>
          <div className='mt-5 ms-5 text-xl leading-10'>
            My dream as a kid is pretty common. I wanted to be a scientist who can create amazing things. <br />
            Being a scientist isn't that easy, especially in Myanmar. But I never dropped my interest in creating. <br />
            I discovered programming and in an instant, I knew this is where I could do whatever I wanted. <br />
            Since then, I studied web development & coding. Despite all the hardship, I managed to become <br />
            a <span className="font-bold">JUNIOR WEB DEVELOPER</span> at the start of 2023.
          </div>
          <div className="mt-5 ms-5">
            <h1 className="text-3xl dm-san">What Is My Profession?</h1>
            <div className="mt-3 dm-san">
              <span className='flex items-center'>
                2023 — Present <pre className='font-bold'>   APP.COM.MM</pre>
              </span>
              <p className="mt-3 text-lg">
                I mainly focus on backend development here. My role is to meet with clients, understand their needs, write codes for backend & collaborate with front end developer effectively. I've done serveral projects, such as- <br />
                E Commerce Apps, Nutrition Tracking App, Point Of Sale Systems & Inventory Management Systems.
              </p>
            </div>
          </div>
          <h1 className="text-4xl dm-san mt-10 ms-5">SKILLS</h1>
          <div className="mt-3 ms-5 text-8xl grid grid-cols-6 justify-center">
            <div className='relative'>
              <i className="fa-brands fa-html5 wipe" style={{ '--wipe-percent': "15%" }}></i>
              <i className="fa-brands fa-html5 absolute left-0 opacity-50"></i>
            </div>
            <div className='relative'>
              <i className="fa-brands fa-css3-alt wipe" style={{ '--wipe-percent': "30%" }}></i>
              <i className="fa-brands fa-css3-alt absolute left-0 opacity-50"></i>
            </div>
            <div className='relative'>
              <i className="fa-brands fa-js wipe" style={{ '--wipe-percent': "25%" }}></i>
              <i className="fa-brands fa-js absolute left-0 opacity-50"></i>
            </div>
            <div className='relative'>
              <i className="fa-brands fa-react wipe" style={{ '--wipe-percent': "60%" }}></i>
              <i className="fa-brands fa-react absolute left-0 opacity-50"></i>
            </div>
            <div className='relative'>
              <i className="fa-brands fa-php wipe" style={{ '--wipe-percent': "35%" }}></i>
              <i className="fa-brands fa-php absolute left-0 opacity-50"></i>
            </div>
            <div className='relative'>
              <i className="fa-brands fa-laravel wipe" style={{ '--wipe-percent': "20%" }}></i>
              <i className="fa-brands fa-laravel absolute left-0 opacity-50"></i>
            </div>
          </div>
        </span>
      </div>
    </div>
  )
}

export default AboutMe