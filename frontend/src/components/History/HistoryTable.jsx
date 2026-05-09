import { useState } from "react";
import { Plus, Pen, Trash } from "lucide-react";

function HistoryTable() {
    const headTableStyles = "px-6 py-5 font-medium text-gray-500 text-sm"
    const bodyTableStyles = "px-6 py-5 font-normal text-sm"

    const MOCK_DATA = [
        { user: "Juan", dni: "12345678", articles: "1", loanDate: "2024-01-15", returnDate: "2024-01-20", status: "Devuelto" },
        { user: "María", dni: "87654321", articles: "6", loanDate: "2024-02-01", returnDate: "2024-02-10", status: "Devuelto" },
        { user: "Carlos", dni: "11223344", articles: "5", loanDate: "2024-03-05", returnDate: "2024-03-15", status: "Devuelto" },
        { user: "Farid", dni: "70735811", articles: "2", loanDate: "2024-02-05", returnDate: "2024-02-15", status: "Devuelto" },
        { user: "Karol", dni: "70713516", articles: "3", loanDate: "2024-01-05", returnDate: "2024-01-09", status: "Devuelto" }
    ]

    return (
        <>
            <div>
                <table className="w-full text-left border-collapse shadow-md border border-gray-500 rounded-lg overflow-hidden">

                    {/* Header */}
                    <thead className="bg-gray-100">
                        <tr className="border-b border-gray-200">

                            <th className={headTableStyles}>USUARIO</th>
                            <th className={headTableStyles}>DNI/Carnet</th>
                            <th className={headTableStyles}>ARTÍCULOS</th>
                            <th className={headTableStyles}>FECHA PRÉSTAMO</th>
                            <th className={headTableStyles}>FECHA DEVOLUCIÓN</th>
                            <th className={headTableStyles}>ESTADO</th>

                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {MOCK_DATA.map(user => (
                            <tr
                                key={user.dni}
                                className="border-b border-gray-200 hover:bg-gray-100 duration-300 cursor-pointer"
                            >
                                <td className={bodyTableStyles}>
                                    {user.user}
                                </td>
                                <td className={bodyTableStyles}>
                                    {user.dni}
                                </td>
                                <td className={bodyTableStyles}>
                                    <div className="flex items-center gap-2">
                                        {user.articles}
                                        <p>artículo(s)</p>
                                    </div>
                                </td>
                                <td className={bodyTableStyles}>
                                    {user.loanDate}
                                </td>
                                <td className={bodyTableStyles}>
                                    {user.returnDate}
                                </td>
                                <td className={bodyTableStyles}>
                                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full">
                                        {user.status}
                                    </span>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        </>
    )
}

export default HistoryTable;