import { useState } from "react";
import axios from "axios";

export default function ImageUploader() {

  const [image, setImage] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const handleImageUpload =
    async (e) => {

      const file =
        e.target.files[0];

      if (!file) return;

      setImage(
        URL.createObjectURL(file)
      );

      const formData =
        new FormData();

      formData.append(
        "image",
        file
      );

      try {

        setLoading(true);

        const response =
          await axios.post(
            "http://127.0.0.1:5000/api/upload/image",
            formData,
            {
              headers: {
                "Content-Type":
                  "multipart/form-data",
              },
            }
          );

        setMessage(
          "Image uploaded successfully!"
        );

        console.log(
          response.data
        );

      } catch (error) {

        console.error(error);

        setMessage(
          "Upload failed."
        );

      } finally {

        setLoading(false);

      }
    };

  const handleRemoveImage =
    () => {

      setImage(null);

      setMessage("");

    };

  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h3 className="text-xl font-semibold mb-4">
        Upload Oral Image
      </h3>

      <label
        htmlFor="oral-image"
        className="cursor-pointer block"
      >

        {image ? (

          <img
            src={image}
            alt="Uploaded"
            className="w-full h-80 object-cover rounded-xl border"
          />

        ) : (

          <div className="h-80 border-2 border-dashed border-blue-300 rounded-xl flex flex-col items-center justify-center">

            <p className="text-lg font-medium text-gray-700">
              Upload Image
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Click here to select an oral scan image
            </p>

          </div>

        )}

      </label>

      <input
        id="oral-image"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageUpload}
      />

      {loading && (
        <p className="mt-4 text-blue-600 font-medium">
          Uploading...
        </p>
      )}

      {message && (
        <p className="mt-4 text-green-600 font-medium">
          {message}
        </p>
      )}

      {image && (

        <button
          onClick={
            handleRemoveImage
          }
          className="mt-4 w-full bg-red-500 text-white py-3 rounded-xl font-medium hover:bg-red-600 transition"
        >
          Remove Image
        </button>

      )}

    </div>
  );
}