import React from "react";

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
  return (
    <div>
      <h1 className="text-4xl font-bold text-center pt-10 pb-10">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`gallery-${index}`}
              loading="lazy"
              className="rounded-xl shadow-lg hover:bg-neutral-700"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
