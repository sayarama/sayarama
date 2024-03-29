import React from "react";
import Navbar from "../Navbar/Navbar";
import items from "../project.json";

function page() {
  return (
    <>
      <div className="w-screen bg-cover bg-center bg-no-repeat bg-[url('https://raw.githubusercontent.com/ulrmdhn/me.portoflio/master/src/img/bg-color-grid.png')]">
        <Navbar />
        <h1 className="text-center text-white text-2xl font-bold mb-10 underline underline-offset-8">
          My Projects
        </h1>
        <div className="flex flex-col gap-5 flex-wrap md:flex-row items-center md:justify-center mt-10 lg:w-9/12 lg:m-auto">
          {items.map((item) => {
            return (
              <div key={item.id} className="flex hover:translate-x-3 transition rounded-xl flex-col w-72 h-96 gap-3 bg-white">
                <img className="w-72 rounded-t-lg" src={item.img} alt="img" />
                <span className="p-3">
                  <p className="text-lg font-bold mb-2 text-[#282A2B]">
                    {item.title}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {item.tech.map((tech, index) => <p className='p-2 border-2 border-gray text-black hover:bg-black hover:text-white' key={index}>{tech}</p>)}
                  </div>

                  {/* <button className="text-white hover:bg-gray-900 bg-[#282A2B] px-5 py-2 rounded-md font-bold">
                    Visit
                  </button> */}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default page;
