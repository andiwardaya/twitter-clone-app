import React from "react";

const SidebarLink = ({ Icon, text, active }) => {
  return (
    <div
      className={`flex hoverAnimation justify-center items-center xl:justify-start space-x-3 ${
        active && "font-bold"
      }`}
    >
      <Icon className="h-7 text-white" />
      <span className="hidden xl:inline text-white">{text}</span>
    </div>
  );
};

export default SidebarLink;
