import { useState, useEffect } from "react";
import {
  Package,
  CheckCircle,
  XCircle,
  UserPlus,
  Clock,
  Calendar,
  TrendingUp,
  AlertCircle,
  History as HistoryIcon
} from "lucide-react";

import { format } from "date-fns";
import { es } from "date-fns/locale";

export function HomePage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const [dashboard, setDashboard] = useState({
    total_items: 0,
    available_items: 0,
    borrowed_items: 0,
    active_loans: 0
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ⏰ reloj
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 📡 cargar backend
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        setLoading(true);

        const res = await fetch("http://localhost:3000/dashboard");
        const data = await res.json();

        if (!res.ok) throw new Error(data?.error || "Error API");

        setDashboard(data);
      } catch (err) {
        console.error(err);
        setError("No se pudo cargar el dashboard");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-center text-gray-500">
        Cargando dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="h-full">

      {/* HEADER */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
        <div className="px-8 py-8 flex justify-between items-center">

          <div className="flex items-center gap-5">
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <Package className="w-10 h-10 text-blue-600" />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-white">StockLend</h1>
              <p className="text-blue-100">Control de préstamos</p>
            </div>
          </div>

          <div className="bg-white/15 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/30">
            <div className="text-white text-2xl font-bold flex gap-2">
              <Clock className="w-5 h-5" />
              {format(currentTime, "HH:mm:ss")}
            </div>
            <div className="text-sm text-blue-100 flex gap-2">
              <Calendar className="w-4 h-4" />
              {format(currentTime, "EEEE, d MMMM yyyy", { locale: es })}
            </div>
          </div>

        </div>
      </div>

      {/* CONTENT */}
      <div className="p-8 bg-gray-50 min-h-screen">

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">

          <Card title="Total items" value={dashboard.total_items} icon={<Package />} />
          <Card title="Disponibles" value={dashboard.available_items} icon={<CheckCircle />} />
          <Card title="Prestados" value={dashboard.borrowed_items} icon={<XCircle />} />
          <Card title="Activos" value={dashboard.active_loans} icon={<TrendingUp />} />

        </div>

        {/* ALERTA */}
        {dashboard.available_items <= 2 && (
          <div className="bg-yellow-100 border border-yellow-400 rounded-xl p-4 mb-8 flex gap-3">
            <AlertCircle className="text-yellow-600" />
            <p className="text-yellow-800">
              Stock bajo detectado
            </p>
          </div>
        )}

        {/* INFO SIMPLE */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-4">Estado del sistema</h2>

          <p>Total items: {dashboard.total_items}</p>
          <p>Disponibles: {dashboard.available_items}</p>
          <p>Prestados: {dashboard.borrowed_items}</p>
          <p>Préstamos activos: {dashboard.active_loans}</p>
        </div>

      </div>
    </div>
  );
}

/* CARD SIMPLE */
function Card({ title, value, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="mb-3">{icon}</div>
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}