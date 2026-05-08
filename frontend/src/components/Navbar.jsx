import NavbarCards from "./NavbarCards";
import { useLocation } from "react-router-dom";

function Navbar() {

    const location = useLocation();

    const titles = {
        "/": "Panel de Control",
        "/inventario": "Gestión de Inventario",
        "/prestamos": "Préstamos Activos",
        "/historial": "Registro Histórico",
    };

    return (
        <div className="flex p-3 items-center bg-white shadow-sm">

            <h2 className="text-lg font-semibold">
                {titles[location.pathname]}
            </h2>

            <div className="flex flex-1 justify-end">
                <NavbarCards />
            </div>

        </div>
    );
}

export default Navbar;