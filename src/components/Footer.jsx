import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] text-gray-800 px-10 md:px-16 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Logo + Description */}
        <div>
          <img
            src="logo/logo-1.png"
            alt="AmigoWebster Logo"
            className="w-32 mb-4"
          />
          <p className="text-sm">
            Welcome to Amigowebster – Your gateway to making an eminent digital
            presence! We at Amigowebster are more than just a digital marketing
            and IT services provider; we can help build your digital presence by
            creating a functional yet awe-inspiring website for your business.
          </p>
        </div>

        {/* Middle: Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Press Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Address</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-gray-600" /> +91 9445332233
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-gray-600" /> balaji@amigowebster.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-gray-600" /> Sudarkodi Apts,
              Mainkandan Nagar 1st Street
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-rose-300 opacity-35 mt-10 md:mt-20 md:px-20"></div>

      <div className="text-center text-xs text-gray-500 mt-8">
        © 2025 Created with{" "}
        <a href="https://amigowebster.com" className="underline">
          amigowebster
        </a>
      </div>
    </footer>
  );
}
