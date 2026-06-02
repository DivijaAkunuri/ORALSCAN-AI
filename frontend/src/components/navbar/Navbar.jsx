import {
  Bell,
  UserCircle2
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white border-b">

      <div className="px-8 h-20 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold">
            O
          </div>

          <div>

            <h2 className="font-bold text-lg">
              OralScan AI
            </h2>

            <p className="text-xs text-gray-500">
              Clinical Dashboard
            </p>

          </div>

        </div>

        <div className="flex items-center gap-6">

          <button>
            <Bell
              size={22}
              className="text-gray-500"
            />
          </button>

          <div className="flex items-center gap-3">

            <UserCircle2
              size={36}
              className="text-primary"
            />

            <div>
              <p className="font-medium">
                Dr. Ramesh
              </p>

              <p className="text-xs text-gray-500">
                Oral Pathologist
              </p>
            </div>

          </div>

        </div>

      </div>

    </nav>
  );
}