import React from "react";

const Loader = () => {
  return (
    <div className={`lg:col-span-1 w-full shadow-sm p-4 space-y-2`}>
      <div className="h-4 bg-gray-100 animate-pulse w-1/2 "></div>
      <div className="h-4 bg-gray-100 animate-pulse "></div>
      <div className="h-20 bg-gray-100 animate-pulse "></div>
      <div className="grid grid-cols-2 gap-3">
        <div className="h-4 bg-gray-100 animate-pulse col-span-1"></div>
        <div className="h-4 bg-gray-100 animate-pulse col-span-1"></div>
      </div>
      <div className="h-4 bg-gray-100 animate-pulse"></div>
    </div>
  );
};

export default Loader;
