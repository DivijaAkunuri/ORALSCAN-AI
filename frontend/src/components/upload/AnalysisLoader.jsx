export default function AnalysisLoader() {
  return (
    <div className="bg-white rounded-3xl p-8">

      <h2 className="font-bold text-xl mb-4">
        AI Analysis Running
      </h2>

      <div className="w-full bg-gray-200 rounded-full h-4">
        <div className="bg-primary h-4 rounded-full w-[75%]" />
      </div>

      <p className="mt-4 text-gray-500">
        Processing oral lesion image...
      </p>

    </div>
  );
}