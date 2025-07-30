import React from "react";

const Explore = () => {
  return (
    <div className="pt-10 md:pt-20">
      {/* <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover">
        <source
          src="https://amigowebster.com/wp-content/uploads/2025/05/Amigoprofile-1900-x-800-px.mp4"
          type="video/mp4"
        />
      </video> */}
      <div
        className="w-full h-[200px]  sm:h-[500px] md:h-[400px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("/video/video.png")` }}></div>
    </div>
  );
};

export default Explore;
