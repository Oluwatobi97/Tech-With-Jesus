import React from "react";

const TiktokIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 7.5a4.5 4.5 0 0 1-4.5 4.5H12V7a4.5 4.5 0 0 1 4.5-4.5h.5" />
    <path d="M12 16.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
  </svg>
);

export default TiktokIcon;
