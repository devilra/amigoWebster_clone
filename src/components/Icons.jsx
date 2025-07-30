import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoMusicalNotes } from "react-icons/io5";
import { FaCamera } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";

// import { FaHandshakeAngle } from "react-icons/fa6";
// <FaHandshakeAngle />;
//
// ;
//
// ;
//
//
//
// ;

const IconCircle = ({ children }) => {
  return (
    <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center text-xl">
      {children}
    </div>
  );
};

const Icons = () => {
  return (
    <div className="space-y-3">
      <IconCircle>
        <div className="flex justify-center flex-wrap p-2">
          <div className="flex">
            <FaHeart size={10} />
            <IoMusicalNotes size={10} />
          </div>
          <div className="flex">
            <FaCamera size={10} />
            <AiFillThunderbolt size={10} />
          </div>
        </div>
      </IconCircle>
    </div>
  );
};

export default Icons;
