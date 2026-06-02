export default function RoleSelector({
  selectedRole,
  setSelectedRole,
}) {
  const roles = [
    "Doctor",
    "Patient",
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {roles.map((role) => (
        <button
          key={role}
          type="button"
          onClick={() => setSelectedRole(role)}
          className={`
            h-12
            rounded-xl
            border
            font-semibold
            transition-all
            duration-200

            ${
              selectedRole === role
                ? "bg-blue-700 text-white border-blue-700 shadow-md"
                : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
            }
          `}
        >
          {role}
        </button>
      ))}
    </div>
  );
}