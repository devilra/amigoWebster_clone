import React from "react";
import { HiCheckCircle } from "react-icons/hi";
import ServiceCard from "./ServiceCard";
import { CiHeart } from "react-icons/ci";
import Icons from "./Icons";
import OurClients from "./OurClients";
import Gallery from "./Gallery";

const services = [
  "Corporate Profile",
  "Email Marketing",
  "Brochure and Flyers",
  "Corporate Videos",
  "Website Development",
  "Social Media Management",
  "Logo Designing",
  "Graphic Designing",
];

const service = [
  {
    title: "Website redesigning",
    desc: "Website redesign services involve revamping an existing website to improve its overall design, functionality, and user experience.",
    image: "/service/service1.png",
  },
  {
    title: "Seo Content Writting",
    desc: "Proper and effective search engine optimization helps in gaining more customer visits to your website. To increase website traffic,",
    image: "/service/service2.jpg",
  },
  {
    title: "Social Media Marketing",
    desc: "Social media marketing plays a major role in the development of both B2B and B2C businesses.",
    image: "/service/service3.webp",
  },
  {
    title: "Website designing",
    desc: "A domain is the unique address that people type into their web browsers to visit your website.",
    image: "/service/service4.jpeg",
  },
  {
    title: "Logo Designing",
    desc: "We understand the importance of branding and we work with our clients to develop a brand identity.",
    image: "/service/service5.webp",
  },
  {
    title: "Brochures & Flyers",
    desc: "We create intensely beautiful designs and come up with creative brochure designs to attract your audience.",
    image: "/service/service6.webp",
  },
];

const Hero = () => {
  return (
    <section>
      <div className="md:flex">
        <div>
          <h1 className="text-5xl md:text-[85px] font-bold text-gray-800">
            Website
            <br />
            Development
            <br />
            <span className="text-[#ff4e63]  text-4xl md:text-7xl font-extrabold">
              Services
            </span>
          </h1>
          <p className="mt-6 text-gray-400 text-base md:text-lg">
            Best Low Cost Website Designing Company in Medavakkam Chennai. At
            our IT solution services company, we are dedicated to empowering
            businesses on their journey of digital transformation. With
            cutting-edge technologies and a team of skilled professionals.
          </p>
        </div>
        {/* Right Image Content */}
        <div className=" flex justify-center ">
          <div className="relative w-72 h-72 md:w-[380px] md:h-[380px] mr-5 md:mr-32 md:ml-10">
            <img
              src="/Hero/hero1.webp"
              alt="Smiling Lady"
              className="h-80 w-full md:h-full "
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-center text-[#ff4e63] text-3xl font-bold">
          -WHAT WE DO-
        </h1>
        <h1 className="mt-5 text-gray-700 ">
          Low Cost Website Designing Company in Medavakkam Chennai
        </h1>
        <p className="text-gray-400">
          Amigowebster believes that every business deserves a spectacular
          website that can showcase the brand, its values, and its esteemed
          services to its target audience and the world. A website acts as a
          virtual shop that provides your customers and visitors a peek into the
          image of that business. We can help create, design, and maintain your
          website that best reflects your products, services, and values
          effectively.
        </p>
      </div>
      <div className="md:ml-10 flex flex-col md:flex md:flex-row justify-center mt-10 ">
        <img
          src="/Hero/hero2.png"
          alt="AmigoWebster"
          className="h-60 ml-10 md:ml-0 md:h-96 px-5"
        />

        <div className="md:flex md:flex-col md:ml-10 mb-16 md:mb-36">
          <h1 className=" pt-5 text-[#ff4e63] text-3xl font-bold md:pt-10">
            AmigoWebster - Where Vision Meets Innovation
          </h1>
          <p className="text-gray-400 mt-5">
            At Amigowebster, we are a dynamic force in the world of digital
            creativity. We are not just a digital agency; we are your trusted
            partner in crafting compelling digital narratives and designs that
            elevate your brand to new heights. Founded in 2022, our journey is a
            testament to the power of vision, innovation, and a deep commitment
            to delivering excellence in web design, graphic design, and digital
            marketing solutions.
          </p>
          <div className="mt-10">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-2">
                <HiCheckCircle className="text-sky-400 text-xl" />
                <span className="text-gray-400">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-[#ff4e63] mb-5 text-4xl md:text-5xl font-bold">
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 p-6">
          {service.map((servic, index) => (
            <ServiceCard
              key={index}
              title={servic.title}
              desc={servic.desc}
              image={servic.image}
            />
          ))}
        </div>
      </div>
      <div className="md:my-0 md:mt-32 w-full  md:flex gap-3">
        <img
          src="/service/choose.jpg"
          alt="choose"
          className="h-80 md:h-[500px] mt-12 md:mt-10  "
        />

        <div className="md:mx-12 flex flex-col ">
          <h1 className="text-[#ff4e63] mt-5 md:mt-0 text-xl tracking-[1px] font-semibold ">
            Why Choose Us?
          </h1>
          <p className="text-3xl  text-gray-800 py-5 md:text-5xl font-semibold">
            We Get Digital — and We Get You <br />
          </p>
          <p className="text-gray-400 mt-3 text-[14px]">
            At AmigoWebster, we understand that your business is more than just
            a website — it’s your brand, your vision, and your future. That’s
            why we take the time to understand your goals and turn them into
            smart, effective digital solutions.
          </p>
          <div className="flex flex-col justify-center items-center md:flex-row md:items-center md:justify-start">
            <div className="mt-10">
              <Icons />
            </div>
            <div className="px-5 pt-5 md:pt-0 ">
              <h1 className="text-gray-800 text-center md:mt-5 md:text-start font-bold text-xl">
                Creative Meets Strategic
              </h1>
              <p className="text-center md:text-start text-[14px] text-gray-400 mt-1">
                We combine clean, modern design with smart strategy and
                functionality. The result? Websites and campaigns that not only
                look great but also perform exceptionally.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:flex-row md:items-center md:justify-start">
            <div className="mt-10">
              <Icons />
            </div>
            <div className="px-5 pt-5 md:pt-0 ">
              <h1 className="text-gray-800 text-center md:mt-5 md:text-start font-bold text-xl">
                All-in-One Expertise
              </h1>
              <p className="text-center md:text-start text-[14px] text-gray-400 mt-1">
                From web development and branding to SEO and content — we’ve got
                the skills and tools to cover your entire digital journey. One
                team, one vision, one less thing for you to worry about.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:flex-row md:items-center md:justify-start">
            <div className="mt-10">
              <Icons />
            </div>
            <div className="px-5 pt-5 md:pt-0 ">
              <h1 className="text-gray-800 text-center md:mt-5 md:text-start font-bold text-xl">
                Built on Trust, Proven by Results
              </h1>
              <p className="text-center md:text-start text-[14px] text-gray-400 mt-1">
                Our clients stick with us for a reason. We deliver real value,
                measurable results, and a level of service that keeps businesses
                coming back.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <OurClients />
        <Gallery />
      </div>
    </section>
  );
};

export default Hero;
