import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

const GoBackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-0 left-0 m-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
    >
      <ArrowLeftCircleIcon className="w-12 h-12 mx-2" />
    </button>
  );
};

export { GoBackButton };
