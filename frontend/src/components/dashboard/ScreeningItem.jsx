export default function ScreeningItem({
  item
}) {

  const badgeColor = {
    Normal:
      "bg-green-100 text-green-700",

    "Pre-Cancerous":
      "bg-yellow-100 text-yellow-700",

    "High Risk":
      "bg-red-100 text-red-700"
  };

  return (
    <div className="flex justify-between items-center py-4 border-b">

      <div>

        <h3 className="font-semibold">
          {item.patient}
        </h3>

        <p className="text-sm text-gray-500">
          {item.id}
        </p>

      </div>

      <div className="text-right">

        <p className="text-sm text-gray-500">
          {item.date}
        </p>

        <span
          className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${badgeColor[item.result]}`}
        >
          {item.result}
        </span>

      </div>

    </div>
  );
}