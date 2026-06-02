import ScreeningItem from "./ScreeningItem";

import {
  recentScreenings
} from "../../mock/doctorData";

export default function RecentScreenings() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-xl font-bold">
          Recent Screenings
        </h2>

        <button className="text-primary font-medium">
          View All
        </button>

      </div>

      {recentScreenings.map((item) => (
        <ScreeningItem
          key={item.id}
          item={item}
        />
      ))}

    </div>
  );
}