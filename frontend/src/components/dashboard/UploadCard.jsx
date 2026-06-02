import {
  Camera,
  UploadCloud
} from "lucide-react";

export default function UploadCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <h2 className="text-xl font-bold mb-6">
        New Screening
      </h2>

      <label className="border-2 border-dashed border-blue-300 rounded-3xl h-[320px] flex flex-col justify-center items-center cursor-pointer hover:bg-blue-50 transition">

        <Camera
          size={50}
          className="text-primary"
        />

        <h3 className="mt-6 font-semibold text-lg">
          Upload Lesion Image
        </h3>

        <p className="text-gray-500 mt-2">
          JPG, PNG up to 10 MB
        </p>

        <div className="mt-6 flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl">

          <UploadCloud size={18} />

          <span>Select File</span>

        </div>

        <input
          type="file"
          hidden
        />

      </label>

    </div>
  );
}