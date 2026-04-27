export default function Action({ title, icon }) {
  return (
    <button className="bg-blue-600 text-white p-6 rounded-xl flex items-center gap-3 hover:bg-blue-700 transition">
      <div className="text-white">{icon}</div>
      <span className="font-medium">{title}</span>
    </button>
  );
}