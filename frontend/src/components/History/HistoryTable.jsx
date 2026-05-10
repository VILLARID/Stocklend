import { useState } from "react";
import HistoryDetailModal from "./HistoryDetailModal";

function HistoryTable() {

    const headTableStyles =
        "px-6 py-5 font-medium text-gray-500 text-sm";

    const bodyTableStyles =
        "px-6 py-5 font-normal text-sm";

    const [selectedLoan, setSelectedLoan] = useState(null);

    const MOCK_DATA = [
        {
            user: "Juan",
            dni: "12345678",
            loanDate: "2024-01-15",
            returnDate: "2024-01-20",
            status: "Devuelto",
            email: "juan@gmail.com",

            articles: [
                {
                    name: "Batidora KitchenAid",
                    cat: "Electrodomésticos",
                    status: "Devuelto"
                }
            ]
        },

        {
            user: "María",
            dni: "87654321",
            loanDate: "2024-02-01",
            returnDate: "2024-02-10",
            status: "Devuelto",
            email: "maria@gmail.com",

            articles: [
                {
                    name: "Juego de cuchillos",
                    cat: "Utensilios",
                    status: "Devuelto"
                },
                {
                    name: "Tabla de picar",
                    cat: "Utensilios",
                    status: "Devuelto"
                },
                {
                    name: "Licuadora Vitamix",
                    cat: "Electrodomésticos",
                    status: "Devuelto"
                }
            ]
        },

        {
            user: "Carlos",
            dni: "11223344",
            loanDate: "2024-03-05",
            returnDate: "2024-03-15",
            status: "Devuelto",
            email: "carlos@gmail.com",

            articles: [
                {
                    name: "Olla Instant Pot",
                    cat: "Cocina",
                    status: "Devuelto"
                },
                {
                    name: "Sartén Antiadherente",
                    cat: "Cocina",
                    status: "Devuelto"
                }
            ]
        }
    ];

    return (
        <>
            <div>

                <table className="w-full text-left border-collapse shadow-md border border-gray-200 rounded-xl overflow-hidden">

                    {/* Header */}
                    <thead className="bg-gray-100">

                        <tr className="border-b border-gray-200">

                            <th className={headTableStyles}>
                                USUARIO
                            </th>

                            <th className={headTableStyles}>
                                DNI/Carnet
                            </th>

                            <th className={headTableStyles}>
                                ARTÍCULOS
                            </th>

                            <th className={headTableStyles}>
                                FECHA PRÉSTAMO
                            </th>

                            <th className={headTableStyles}>
                                FECHA DEVOLUCIÓN
                            </th>

                            <th className={headTableStyles}>
                                ESTADO
                            </th>

                        </tr>

                    </thead>

                    {/* Body */}
                    <tbody>

                        {MOCK_DATA.map((user) => (

                            <tr
                                key={user.dni}
                                onClick={() => setSelectedLoan(user)}
                                className="border-b border-gray-200 hover:bg-gray-50 duration-200 cursor-pointer"
                            >

                                <td className={bodyTableStyles}>
                                    {user.user}
                                </td>

                                <td className={bodyTableStyles}>
                                    {user.dni}
                                </td>

                                <td className={bodyTableStyles}>

                                    <div className="flex items-center gap-2">

                                        <span className="font-medium">
                                            {user.articles.length}
                                        </span>

                                        <span className="text-gray-500">
                                            artículo(s)
                                        </span>

                                    </div>

                                </td>

                                <td className={bodyTableStyles}>
                                    {user.loanDate}
                                </td>

                                <td className={bodyTableStyles}>
                                    {user.returnDate}
                                </td>

                                <td className={bodyTableStyles}>

                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {user.status}
                                    </span>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {/* Modal */}
            <HistoryDetailModal
                loan={selectedLoan}
                onClose={() => setSelectedLoan(null)}
            />
        </>
    );
}

export default HistoryTable;