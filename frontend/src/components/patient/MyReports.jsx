import { Download } from "lucide-react";

const reports = [
  {
    id: 1,
    date: "09 May 2025",
    result: "Normal"
  },
  {
    id: 2,
    date: "15 Apr 2025",
    result: "Normal"
  }
];

export default function MyReports() {
  return (
    <div className="bg-white rounded-3xl p-6">

      <h2 className="text-xl font-bold mb-6">
        My Reports
      </h2>

      {reports.map((report) => (
        <div
          key={report.id}
          className="flex justify-between py-4 border-b"
        >

          <div>
            <h3>{report.date}</h3>
            <p className="text-gray-500">
              {report.result}
            </p>
          </div>

          <button>
            <Download />
          </button>

        </div>
      ))}

    </div>
  );
}