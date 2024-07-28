import React from "react";

const ErrorData: React.FC<{ text?: string }> = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-6xl text-red-600">{text}</p>
    </div>
  );
};

export default ErrorData;
