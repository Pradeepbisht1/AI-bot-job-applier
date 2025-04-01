import React, { useState } from "react";

export default function JobPreferencesForm() {
  const [prefs, setPrefs] = useState({
    jobTitle: "",
    location: "",
    salary: "",
    experience: "",
  });

  const handleChange = (e) => setPrefs({ ...prefs, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send prefs to backend
    console.log("Preferences:", prefs);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow border space-y-3">
      <h2 className="text-lg font-semibold text-gray-700">Job Preferences</h2>
      <input
        type="text"
        name="jobTitle"
        placeholder="Job Title"
        value={prefs.jobTitle}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={prefs.location}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="salary"
        placeholder="Salary Range"
        value={prefs.salary}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <select
        name="experience"
        value={prefs.experience}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="">Experience Level</option>
        <option value="junior">Junior</option>
        <option value="mid">Mid</option>
        <option value="senior">Senior</option>
      </select>
      <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
        Save Preferences
      </button>
    </form>
  );
}
