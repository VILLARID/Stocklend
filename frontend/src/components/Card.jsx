export default function Card({ title, value, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
      
      <div className="mb-3 text-blue-600">
        {icon}
      </div>

      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h2 className="text-2xl font-bold text-gray-900">
        {value}
      </h2>

    </div>
  );
}