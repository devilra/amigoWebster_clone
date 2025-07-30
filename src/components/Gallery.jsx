import React, { useState } from "react";

const images = [
  "/gallery/gallery.jpg",
  "/gallery/gallery2.jpg",
  "/gallery/gallery3.jpg",
  "/gallery/gallery4.jpg",
  "/gallery/gallery5.jpg",
  "/gallery/gallery6.jpg",
  "/gallery/gallery7.jpg",
  "/gallery/gallery8.jpg",
  "/gallery/gallery9.jpg",
  "/gallery/gallery10.jpg",
];

const Gallery = () => {
  const [selectImage, setSelectImage] = useState(null);
  console.log(selectImage);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center md:text-5xl md:font-bold text-gray-500 pt-10 pb-10">
        Gallery
      </h1>
      <div className="grid relative grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-xl shadow-lg `}
            onClick={() => setSelectImage(img)}>
            <img
              src={img}
              alt={`gallery-${index}`}
              loading="lazy"
              className="rounded-xl  shadow-lg"
            />
            <div className="absolute inset-0 hover:cursor-move bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-10">
        <button className="bg-[#7878f7] md:bg-[#4242f7] px-5 py-2 text-[14px] rounded text-white">
          Load More
        </button>
      </div>
      {selectImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectImage(null)}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectImage}
              alt="preview"
              className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
