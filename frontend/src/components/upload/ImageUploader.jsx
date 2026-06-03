import axios from "axios";
import { useState } from "react";

export default function ImageUploader() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Select an image first");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    const user = JSON.parse(localStorage.getItem("user"));

    formData.append("patientName", user?.name || "Unknown");
    formData.append("email", user?.email || "");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/upload/image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("UPLOAD RESULT:", res.data);

      setResult(res.data.scan);
    } catch (err) {
      console.log("UPLOAD ERROR:", err.message);
      alert("Upload failed");
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload}>
        Upload Image
      </button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Result:</h3>
          <p>Prediction: {result.prediction}</p>
          <p>Confidence: {result.confidence}%</p>
        </div>
      )}
    </div>
  );
}