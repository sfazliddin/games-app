// src/components/FeedbackForm.tsx
import React, { useState } from "react";

const FeedbackForm: React.FC = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the feedback submission logic (you can send it to a server, etc.)
    console.log("Feedback submitted:", feedback);
    // Optionally, you can reset the form after submission
    setFeedback("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
      <label
        htmlFor="feedback"
        className="block text-lg font-medium text-gray-700"
      >
        Your Feedback:
      </label>
      <textarea
        id="feedback"
        className="mt-2 p-2 w-full border rounded-md"
        rows={5}
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        required
      ></textarea>

      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white p-2 rounded-md"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
