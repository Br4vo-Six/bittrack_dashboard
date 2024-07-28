import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-32 h-32 ease-linear border-8 border-t-8 border-gray-200 rounded-full loader"></div>
    </div>
  );
};

export default LoadingSpinner;
