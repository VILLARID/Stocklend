import { useState } from "react";
import logo from "../assets/logo.png";
import { Home, Package, ClipboardList, History } from "lucide-react";
import { useLocation } from "react-router-dom";

function Sidebar() {

    const location = useLocation();

    const links = [
        { name: "Inicio", path: "/", icon: Home },
        { name: "Inventario", path: "/inventario", icon: Package },
        { name: "Préstamos", path: "/prestamos", icon: ClipboardList },
        { name: "Historial", path: "/historial", icon: History },
    ];

    return (
        <div className="flex flex-col h-screen w-1/5 shadow-sm p-4 bg-[#111827] text-white">

            {/* TITLE */}
            <div className="flex items-center text-2xl font-medium p-3 gap-2">
                <img src={logo} alt="Logo" className="w-10" />
                <span className="text-[#374151]">Stock</span>
                <span className="text-[#10b981]">Lend</span>
            </div>

            <hr className="border-gray-700 my-2" />

            {/* ROUTES */}
            <div className="flex p-2">
                <ul className="w-full space-y-1">

                    {links.map((link) => {
                        const Icon = link.icon;

                        return (
                            <li key={link.name}>
                                <a
                                    href={link.path}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${location.pathname === link.path
                                        ? "bg-[#1e2937]"
                                        : "hover:bg-[#1e2937]"
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    {link.name}
                                </a>
                            </li>
                        );
                    })}

                </ul>
            </div>

        </div >
    );
}

export default Sidebar;