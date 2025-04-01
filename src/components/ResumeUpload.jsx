import React, { useState } from "react";

export default function ResumeUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = () => {
    if (!file) return alert("Please select a file first!");
    // TODO: Upload logic to backend or S3
    console.log("Uploading:", file.name);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow border">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Upload Resume</h2>
      <input type="file" accept=".pdf,.docx" onChange={handleFileChange} className="mb-2" />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Upload
      </button>
    </div>
  );
}
