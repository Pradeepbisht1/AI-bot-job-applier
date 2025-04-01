import React, { useState } from "react";

export default function ResumeOptimization() {
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = () => {
    // TODO: Replace with API call to OpenAI
    setSuggestions([
      "Add more action verbs to your experience section.",
      "Include measurable achievements (e.g., 'Increased revenue by 20%').",
    ]);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow border space-y-3">
      <h2 className="text-lg font-semibold text-gray-700">Resume Suggestions</h2>
      <button
        onClick={fetchSuggestions}
        className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
      >
        Optimize with AI
      </button>
      <ul className="list-disc pl-5 text-gray-600">
        {suggestions.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
