export default function StatCard({
  title,
  value,
  color
}) {

  const styles = {
    dark: "bg-primary text-white",
    green: "bg-green-50 text-green-700",
    yellow: "bg-yellow-50 text-yellow-700",
    red: "bg-red-50 text-red-700"
  };

  return (
    <div
      className={`rounded-3xl p-6 shadow-sm ${styles[color]}`}
    >

      <p className="text-sm font-medium opacity-80">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-4">
        {value}
      </h2>

    </div>
  );
}