import React from "react";
import { FaBars } from "react-icons/fa";
import {Link} from 'react-scroll';


const Home = () => {
  return (<>
    <div
      name="home"
      className=" h-screen w-full
       bg-gradient-to-l from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto  flex flex-col lg:flex-row h-full items-center justify-center  px-4 ">
        <div className="flex flex-col  mt-40 lg:mt-0  justify-center ">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a FrontEnd Developer/Designer
          </h2>
          <p className="text-gray-500 py-4 ">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus iure voluptas inventore quibusdam doloribus nesciunt architecto ipsam. Est officiis laborum reprehenderit accusamus, deleniti nihil natus. Placeat quia voluptate voluptatibus neque sunt enim delectus minima nihil, nemo non nam hic sed repellat ipsam nesciunt, facilis excepturi atque distinctio totam aliquam. Dignissimos?
          </p>

          <div>
            <Link
              to="experience"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaBars size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img id="profile"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            alt="my profile"
            className="rounded-2xl mx-auto w-0 lg:w-2/3 flex flex-col lg:flex"
          />
        </div>
      </div>

    </div>
    </>
  );
};

export default Home;