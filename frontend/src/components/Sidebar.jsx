import { useState } from "react";
import logo from "../assets/logo.png";

import {
    Home,
    Package,
    ClipboardList,
    History,
    ChevronRight,
    PanelLeft
} from "lucide-react";

import { useLocation, Link } from "react-router-dom";

function Sidebar() {

    const location = useLocation();

    const [collapsed, setCollapsed] = useState(false);

    const links = [
        { name: "Inicio", path: "/", icon: Home },
        { name: "Inventario", path: "/inventario", icon: Package },
        { name: "Préstamos", path: "/prestamos", icon: ClipboardList },
        { name: "Historial", path: "/historial", icon: History },
    ];

    return (
        <aside
            className={`
                relative h-screen bg-[#0b1120]
                border-r border-white/5
                transition-all duration-300 ease-in-out
                flex flex-col
                ${collapsed ? "w-[92px]" : "w-[280px]"}
            `}
        >

            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#10b981]/10 blur-3xl rounded-full pointer-events-none"></div>

            {/* Header */}
            <div className="relative flex items-center justify-between px-5 py-6">

                {/* Logo */}
                <div className="flex items-center gap-3 overflow-hidden">

                    <div className="relative">

                        <div className="absolute inset-0 bg-[#10b981]/20 blur-xl rounded-full"></div>

                        <div className="relative bg-white/5 border border-white/10 backdrop-blur-md p-2.5 rounded-2xl">

                            <img
                                src={logo}
                                alt="Logo"
                                className="w-9 h-9 object-contain"
                            />

                        </div>

                    </div>

                    {!collapsed && (

                        <div className="flex flex-col">

                            <h1 className="text-xl font-bold tracking-tight">

                                <span className="text-white">
                                    Stock
                                </span>

                                <span className="text-[#10b981]">
                                    Lend
                                </span>

                            </h1>

                            <span className="text-xs text-gray-500 tracking-wide">
                                Smart Inventory System
                            </span>

                        </div>

                    )}

                </div>

                {/* Toggle */}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className={`
                        absolute top-7
                        ${collapsed ? "right-1/2 translate-x-1/2 top-[88px]" : "-right-4"}
                        bg-[#111827]
                        border border-white/10
                        p-2.5 rounded-2xl
                        hover:bg-[#1f2937]
                        transition-all duration-300
                        shadow-xl
                        group
                    `}
                >

                    <PanelLeft
                        className={`
                            w-4 h-4 text-gray-300
                            transition-transform duration-300
                            ${collapsed ? "rotate-180" : ""}
                        `}
                    />

                </button>

            </div>

            {/* Divider */}
            <div className="px-5">

                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            </div>

            {/* Navigation */}
            <nav className="relative flex-1 px-4 py-6">

                {!collapsed && (

                    <div className="mb-5 px-3">

                        <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 font-semibold">
                            Navegación
                        </p>

                    </div>

                )}

                <ul className="space-y-2">

                    {links.map((link) => {

                        const Icon = link.icon;

                        const isActive =
                            location.pathname === link.path;

                        return (
                            <li key={link.name}>

                                <Link
                                    to={link.path}
                                    className={`
                                        group relative flex items-center
                                        ${collapsed ? "justify-center" : "justify-between"}
                                        px-4 py-3.5 rounded-2xl
                                        overflow-hidden
                                        transition-all duration-300
                                        
                                        ${isActive
                                            ? "bg-[#10b981] text-white shadow-lg shadow-[#10b981]/20"
                                            : "text-gray-400 hover:text-white hover:bg-white/5"
                                        }
                                    `}
                                >

                                    {/* Hover Glow */}
                                    {!isActive && (
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-white/[0.03] to-transparent"></div>
                                    )}

                                    <div className="relative flex items-center gap-3">

                                        <div
                                            className={`
                                                p-2 rounded-xl transition-all duration-300
                                                ${isActive
                                                    ? "bg-white/15"
                                                    : "bg-white/[0.04] group-hover:bg-white/[0.08]"
                                                }
                                            `}
                                        >

                                            <Icon className="w-4.5 h-4.5" />

                                        </div>

                                        {!collapsed && (

                                            <span className="font-medium tracking-tight">
                                                {link.name}
                                            </span>

                                        )}

                                    </div>

                                    {!collapsed && (

                                        <ChevronRight
                                            className={`
                                                relative w-4 h-4 transition-all duration-300
                                                ${isActive
                                                    ? "opacity-100"
                                                    : "opacity-0 group-hover:opacity-100 translate-x-1"
                                                }
                                            `}
                                        />

                                    )}

                                </Link>

                            </li>
                        );
                    })}

                </ul>

            </nav>

            {/* Bottom */}
            {!collapsed && (

                <div className="p-4">

                    <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#111827] to-[#1e293b] p-5">

                        {/* Glow */}
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#10b981]/10 blur-2xl rounded-full"></div>

                        <div className="relative">

                            <div className="bg-[#10b981]/10 border border-[#10b981]/20 w-fit p-2.5 rounded-2xl mb-4">

                                <Package className="w-5 h-5 text-[#10b981]" />

                            </div>

                            <h3 className="text-sm font-semibold text-white">
                                Sistema activo
                            </h3>

                            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                                Administra inventario y préstamos desde un entorno moderno y centralizado.
                            </p>

                        </div>

                    </div>

                </div>

            )}

        </aside>
    );
}

export default Sidebar;