import { useEffect, useState } from "react";

function LoansTable({ onSelectLoan }) {

    const [loans, setLoans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const headTableStyles = "px-6 py-4 text-xs font-semibold tracking-wide uppercase text-gray-400 bg-gray-50";
    const bodyTableStyles = "px-6 py-4 text-sm text-gray-700";

    useEffect(() => {

        const fetchLoans = async () => {

            try {

                const res = await fetch("http://localhost:3000/loans");
                const json = await res.json();

                const loansData = Array.isArray(json)
                    ? json
                    : json.data || json.loans || [];

                setLoans(loansData);

            } catch (err) {

                console.error(err);
                setError("Error cargando préstamos");

            } finally {

                setLoading(false);

            }

        };

        fetchLoans();

    }, []);

    if (loading) return (
        <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex justify-center">
            <div className="w-10 h-10 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin"></div>
        </div>
    );

    if (error) return (
        <div className="w-full bg-white rounded-2xl border border-red-100 p-6">
            <p className="text-red-600 font-medium">{error}</p>
        </div>
    );

    return (
        <div className="w-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
            
            {/* TABLE */}
            <div className="overflow-x-auto">

                <table className="w-full table-fixed border-collapse">

                    {/* COLUMN WIDTH CONTROL */}
                    <colgroup>
                        <col className="w-1/4" />
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                    </colgroup>

                    {/* HEAD */}
                    <thead>
                        <tr className="border-b border-gray-100">
                            <th className="px-6 py-4 text-left text-xs font-semibold tracking-wide uppercase text-gray-400 bg-gray-50">
                                Usuario
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold tracking-wide uppercase text-gray-400 bg-gray-50">
                                DNI
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold tracking-wide uppercase text-gray-400 bg-gray-50">
                                Artículos
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold tracking-wide uppercase text-gray-400 bg-gray-50">
                                Fecha
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold tracking-wide uppercase text-gray-400 bg-gray-50">
                                Hora
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold tracking-wide uppercase text-gray-400 bg-gray-50">
                                Estado
                            </th>
                        </tr>
                    </thead>

                    {/* BODY */}
                    <tbody>

                        {loans.length > 0 ? (

                            loans.map((loan) => (

                                <tr
                                    key={loan.id}
                                    onClick={() => onSelectLoan(loan)}
                                    className="border-b border-gray-100 hover:bg-emerald-50/40 transition-colors duration-200 cursor-pointer group"
                                >

                                    {/* USER */}
                                    <td className="px-6 py-4 text-sm text-gray-700 align-middle">
                                        <div className="flex items-center gap-3 min-w-0">

                                            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold shrink-0">
                                                {loan.user?.charAt(0) || "U"}
                                            </div>

                                            <div className="min-w-0">
                                                <p className="font-semibold text-gray-800 truncate group-hover:text-emerald-600 transition">
                                                    {loan.user || "Sin nombre"}
                                                </p>
                                            </div>

                                        </div>
                                    </td>

                                    {/* DNI */}
                                    <td className="px-6 py-4 text-sm text-gray-700 align-middle">
                                        <span className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-xs font-medium">
                                            {loan.dni || "No registrado"}
                                        </span>
                                    </td>

                                    {/* ARTICLES */}
                                    <td className="px-6 py-4 text-sm text-gray-700 align-middle">
                                        <span className="font-semibold text-gray-800">
                                            {loan.articles?.length || 0}
                                        </span>{" "}
                                        <span className="text-gray-500 text-sm">artículo(s)</span>
                                    </td>

                                    {/* DATE */}
                                    <td className="px-6 py-4 text-sm text-gray-700 align-middle">
                                        {loan.loan_date
                                            ? new Date(loan.loan_date).toLocaleDateString()
                                            : "Sin fecha"}
                                    </td>

                                    {/* HORA */}
                                    <td className="px-6 py-4 text-sm text-gray-700 align-middle">
                                        {loan.loan_date
                                            ? new Date(loan.loan_date).toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit"
                                            })
                                            : "—"}
                                    </td>

                                    {/* STATUS */}
                                    <td className="px-6 py-4 text-sm text-gray-700 align-middle">
                                        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${loan.status === "Devuelto"
                                            ? "bg-emerald-100 text-emerald-700"
                                            : "bg-yellow-100 text-yellow-700"
                                            }`}>
                                            {loan.status}
                                        </span>
                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>
                                <td colSpan="6" className="py-14 text-center text-gray-500">
                                    No hay préstamos registrados
                                </td>
                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default LoansTable;