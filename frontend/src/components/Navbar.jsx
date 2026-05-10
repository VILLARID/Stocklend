import NavbarCards from "./NavbarCards";
import { useLocation } from "react-router-dom";
import {
    Clock3,
    Sparkles,
    CalendarDays
} from "lucide-react";

function Navbar() {

    const location = useLocation();

    const titles = {
        "/": "Dashboard General",
        "/inventario": "Administración de Inventario",
        "/prestamos": "Control de Préstamos",
        "/historial": "Historial del Sistema",
    };

    const currentDate = new Date();

    const formattedDate = currentDate.toLocaleDateString("es-PE", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const formattedTime = currentDate.toLocaleTimeString("es-PE", {
        hour: "2-digit",
        minute: "2-digit"
    });

    return (
        <div className="w-full bg-white border-b border-gray-100 px-6 py-4">

            <div className="flex items-center justify-between">

                {/* Left Section */}
                <div className="flex flex-col">

                    <div className="flex items-center gap-2">

                        <div className="bg-[#10b981]/10 p-2 rounded-xl">

                            <Sparkles className="w-4 h-4 text-[#10b981]" />

                        </div>

                        <h1 className="text-2xl font-bold tracking-tight text-gray-800">
                            {titles[location.pathname]}
                        </h1>

                    </div>

                    <p className="text-sm text-gray-400 mt-2 ml-11">
                        Panel administrativo del sistema
                    </p>

                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">

                    {/* Date & Time */}
                    <div className="flex items-center gap-3 bg-[#f8fafc] border border-gray-100 px-4 py-3 rounded-2xl shadow-sm">

                        {/* Date */}
                        <div className="flex items-center gap-2">

                            <div className="bg-white p-2 rounded-xl border border-gray-100">

                                <CalendarDays className="w-4 h-4 text-[#10b981]" />

                            </div>

                            <div className="flex flex-col leading-tight">

                                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
                                    Fecha
                                </span>

                                <span className="text-sm font-semibold text-gray-700 capitalize">
                                    {formattedDate}
                                </span>

                            </div>

                        </div>

                        {/* Divider */}
                        <div className="w-px h-10 bg-gray-200"></div>

                        {/* Time */}
                        <div className="flex items-center gap-2">

                            <div className="bg-white p-2 rounded-xl border border-gray-100">

                                <Clock3 className="w-4 h-4 text-blue-500" />

                            </div>

                            <div className="flex flex-col leading-tight">

                                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
                                    Hora
                                </span>

                                <span className="text-sm font-semibold text-gray-700">
                                    {formattedTime}
                                </span>

                            </div>

                        </div>

                    </div>

                    {/* Cards */}
                    <NavbarCards />

                </div>

            </div>

        </div>
    );
}

export default Navbar;