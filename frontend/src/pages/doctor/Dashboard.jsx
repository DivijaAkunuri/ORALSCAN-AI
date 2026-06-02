import Navbar from "../../components/navbar/Navbar";
import StatCard from "../../components/dashboard/StatCard";
import RecentScreenings from "../../components/dashboard/RecentScreenings";
import UploadCard from "../../components/dashboard/UploadCard";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F4F7FB]">

      <Navbar />

      <div className="p-8">

        <div>
          <h1 className="text-4xl font-bold text-primary">
            Good Morning, Dr. Ramesh 👋
          </h1>

          <p className="text-gray-500 mt-2">
            Friday, 9 May 2025 — Here's your screening overview
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-5 mt-8">

          <StatCard
            title="TOTAL SCANS"
            value="248"
            color="dark"
          />

          <StatCard
            title="NORMAL"
            value="187"
            color="green"
          />

          <StatCard
            title="PRE-CANCEROUS"
            value="43"
            color="yellow"
          />

          <StatCard
            title="HIGH RISK"
            value="18"
            color="red"
          />

        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-8">

          <RecentScreenings />

          <UploadCard />

        </div>

      </div>

    </div>
  );
}