export default function PatientStats() {
  return (
    <div className="grid lg:grid-cols-3 gap-5 mt-8">

      <div className="bg-white p-6 rounded-3xl">
        <p>Total Screenings</p>
        <h2 className="text-4xl font-bold mt-2">12</h2>
      </div>

      <div className="bg-white p-6 rounded-3xl">
        <p>Latest Status</p>
        <h2 className="text-2xl font-bold mt-2 text-green-600">
          Normal
        </h2>
      </div>

      <div className="bg-white p-6 rounded-3xl">
        <p>Last Screening</p>
        <h2 className="text-2xl font-bold mt-2">
          09 May 2025
        </h2>
      </div>

    </div>
  );
}