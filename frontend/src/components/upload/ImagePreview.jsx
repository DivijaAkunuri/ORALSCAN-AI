import { ImageIcon } from "lucide-react";

export default function ImagePreview({
  image
}) {
  return (
    <div className="bg-white rounded-3xl p-6">

      <h2 className="font-bold mb-4">
        Image Preview
      </h2>

      {image ? (
        <img
          src={URL.createObjectURL(image)}
          alt=""
          className="rounded-2xl"
        />
      ) : (
        <div className="h-80 flex justify-center items-center border-2 border-dashed rounded-2xl">
          <ImageIcon size={60} />
        </div>
      )}

    </div>
  );
}