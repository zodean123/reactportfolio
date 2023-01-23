import React from "react";

const Experience = () => {
  const techs = [
    {
      id: 1,
  
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
  
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
   
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,

      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
 
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
  
      title: "Svelte",
      style: "shadow-white",
    },
    {
      id: 7,
   
      title: "MongoDb",
      style: "shadow-pink-400",
    },
    {
      id: 8,
    
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-l  from-black via-black to-gray-800 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}
            >
             
              <p className="mt-6">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
