import React from 'react'

const About = () => {
  return (
    <div name="about"
    className="w-full h-screen bg-gradient-to-l from-black via-black to-gray-800 text-gray-400"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
      <div className="pb-8">
        <p className="text-6xl hover:animate-bounse text-purple-500 font-bold inline">
          About
        </p>
      </div>

      <p className="text-lg mt-20">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
        deserunt illum mollitia officiis qui exercitationem perferendis neque
        quasi a recusandae necessitatibus tempora iusto! Blanditiis error
        iste, totam fugiat recusandae rerum laborum perferendis molestiae
        aperiam asperiores nemo. Magni dolor maxime debitis vitae, eaque hic
        ab mollitia voluptatibus, a nostrum eveniet laborum!
      </p>

      <br />

      <p className="text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
        pariatur, vel similique sint, nobis aspernatur ut praesentium
        explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
        quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
        Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
        magni quo! Eum cupiditate debitis labore.
      </p>
    </div>
    </div>
  )
}

export default About