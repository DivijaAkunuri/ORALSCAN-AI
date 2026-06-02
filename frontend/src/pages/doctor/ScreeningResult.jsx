export default function ScreeningResults() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">
        Screening Results
      </h1>

      <div className="mt-6 bg-white rounded-xl shadow p-6">
        <h2 className="text-red-600 text-xl font-semibold">
          High Risk Detected
        </h2>

        <p className="mt-3">
          Confidence Score: 94.7%
        </p>

        <p className="mt-2 text-gray-600">
          Immediate specialist referral and biopsy recommended.
        </p>
      </div>
    </div>
  );
}