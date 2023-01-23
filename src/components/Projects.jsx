import React from 'react'

const Projects = () => {
  return (<>
    <div className='bg-gradient-to-l  from-black via-black to-gray-800 text-6xl p-16 flex justify-start items-start text-orange-500 font-medium'><p > Projects </p></div>
    <div className='bg-gradient-to-l  from-black via-black to-gray-800 flex lg:flex lg:justify-center lg:items-center md:flex md:justify-center md:items-center '>
          

        <div class="p-8 grid grid-cols-1 xl:grid-cols-3 gap-8">

  <div class="flex  flex-col md:flex-col md:max-w-xl rounded-lg bg-gray-200 shadow-lg">
    <img class="w-full h-96 hover:scale-105 hover:rounded-lg duration-300  transition-all md:h-96 object-fit md:w-full rounded-lg " src="https://img.freepik.com/free-vector/log-concept-landing-page_52683-22136.jpg?w=1060&t=st=1674230209~exp=1674230809~hmac=22a8703a4668ab74883dc9e80a46bc9439139141347f2aa1fccc78d5f6c1b8ba" alt="" />
    <div class="p-6 flex flex-col justify-start">

      <p class="text-gray-700 text-base mb-4">
A Form page with gateway pass model valiating one's input details using local data base as storage.
      </p>
<a href="https://github.com/zodean123/Signup-page" target="_blank" rel="noreferrer" className='cursor-pointer text-xl font-bold text-center text-black-300'> Source Code</a>
    </div>
  </div>

  <div class="flex flex-col md:flex-col md:max-w-xl rounded-lg bg-gray-200 shadow-lg">
    <img class=" w-full h-auto md:h-96 hover:scale-105 hover:rounded-lg duration-300 object-fit md:w-full rounded-lg  " src="https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/05/CSS-card-dark.jpg" alt="" />
    <div class="p-6 flex flex-col justify-start">
    
      <p class="text-gray-700 mb-4">
        Cards made using React Js with menu showing according to the timings of meals.
      </p>
      <a href="https://github.com/zodean123/reactapp" target="_blank" rel="noreferrer" className='cursor-pointer text-xl font-bold text-center text-black-300'> Source Code</a>
    </div>
  </div>

  <div class="flex flex-col md:flex-col md:max-w-xl rounded-lg bg-gray-200 shadow-lg">
    <img class=" w-full h-auto md:h-96 hover:scale-105 hover:rounded-lg duration-300 object-fit md:w-full rounded-lg " src="https://www.codewithrandom.com/wp-content/uploads/2022/08/Create-an-Image-slider-with-HTML-CSS-and-JavaScript-15.png" alt="" />
    <div class="p-6 flex flex-col justify-start">
    <p class="text-gray-700 text-base mb-4">
      Clone website for a design made purely using HTML,CSS and JavaScript
      </p>
      <a href="https://github.com/zodean123/Kaiyo-landing" target="_blank" rel="noreferrer" className='cursor-pointer text-xl font-bold text-center text-black-300'> Source Code</a>
    </div>
  </div>


</div>
    </div>
    </>
  )
}

export default Projects