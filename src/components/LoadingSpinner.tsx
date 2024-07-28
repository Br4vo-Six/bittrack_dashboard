import React from "react";

const LoadingSpinner: React.FC<{ text?: string }> = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-32 h-32 ease-linear border-8 border-t-8 border-gray-200 rounded-full loader"></div>
      <p className="mt-10 text-2xl">{text}</p>
    </div>
  );
};

export default LoadingSpinner;
