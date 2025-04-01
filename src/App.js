import React from "react";
import ResumeUpload from "./components/ResumeUpload";
import JobPreferencesForm from "./components/JobPreferencesForm";
import ResumeOptimization from "./components/ResumeOptimization";

export default function App() {
  const userName = "John"; // Placeholder for dynamic user name from state or auth

  const handleAutoApply = () => {
    // TODO: Navigate to next page or trigger backend job apply process
    alert("Auto-apply process started!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 md:p-10 space-y-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-indigo-700">AI Resume & Job Apply Bot</h1>
          <p className="text-gray-600 mt-2">
            {`Welcome, ${userName}! Ready to upload, optimize, and let AI apply to jobs tailored for you?`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ResumeUpload />
          <JobPreferencesForm />
        </div>

        <ResumeOptimization />

        <div className="flex justify-center">
          <button
            onClick={handleAutoApply}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl shadow-md transition-all"
          >
            Start Auto-Apply 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
