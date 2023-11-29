// src/pages/FeedbackPage.tsx
import React from "react";
import FeedbackForm from "../components/FeedbackForm";
import { GoBackButton } from "./GeneralButtons";

const FeedbackScreen: React.FC = () => {
  return (
    <div className="container mx-auto mt-10">
      <GoBackButton />
      <h1 className="text-4xl font-bold mb-6">Feedback</h1>
      <p className="text-gray-700">
        We value your feedback! Please share your thoughts with us below.
      </p>
      <FeedbackForm />
    </div>
  );
};

export default FeedbackScreen;
