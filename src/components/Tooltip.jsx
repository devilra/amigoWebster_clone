import { useState } from "react";
import { RiMessageFill } from "react-icons/ri";

export default function ContactFloatButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="fixed bottom-4 right-4 flex flex-col z-40 items-end group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}>
      {/* Tooltip on the left */}
      {showTooltip && (
        <div className="absolute right-14 bottom-1 flex items-center">
          <div className="relative px-3 py-1 rounded-md bg-gray-800 text-white text-sm shadow-lg">
            Message
            {/* Tooltip tail on the right side of the box */}
            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 transform rotate-45"></div>
          </div>
        </div>
      )}

      <button className="bg-[#c8a6f5] p-3 rounded-full shadow-lg  hover:bg-[#c196fa] transition-colors duration-300">
        <RiMessageFill size={30} className="text-white w-7 h-7" />
      </button>
    </div>
  );
}
