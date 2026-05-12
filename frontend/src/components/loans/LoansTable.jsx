import { useEffect, useState } from "react";

function LoansTable({ onSelectLoan }) {

    const [loans, setLoans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const headTableStyles =
        "px-6 py-5 font-medium text-gray-500 text-sm";

    const bodyTableStyles =
        "px-6 py-5 font-normal text-sm";

    useEffect(() => {
        const fetchLoans = async () => {
            try {
                const res = await fetch("http://localhost:3000/loans");
                const json = await res.json();

                setLoans(json);

            } catch (err) {
                console.error(err);
                setError("Error cargando préstamos");
            } finally {
                setLoading(false);
            }
        };

        fetchLoans();
    }, []);

    if (loading) return <p className="p-4 text-gray-500">Cargando...</p>;
    if (error) return <p className="p-4 text-red-500">{error}</p>;

    return (
        <div>
            <table className="w-full text-left border-collapse shadow-md border border-gray-500 rounded-lg overflow-hidden">

                {/* HEADER */}
                <thead className="bg-gray-100">
                    <tr>
                        <th className={headTableStyles}>USUARIO</th>
                        <th className={headTableStyles}>DNI</th>
                        <th className={headTableStyles}>ARTÍCULOS</th>
                        <th className={headTableStyles}>FECHA</th>
                        <th className={headTableStyles}>ESTADO</th>
                    </tr>
                </thead>

                {/* BODY */}
                <tbody>
                    {loans.map((loan) => (
                        <tr
                            key={loan.id}
                            onClick={() => onSelectLoan(loan)}
                            className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                        >
                            <td className={bodyTableStyles}>
                                {loan.user}
                            </td>

                            <td className={bodyTableStyles}>
                                {loan.dni}
                            </td>

                            <td className={bodyTableStyles}>
                                {loan.articles}
                            </td>

                            <td className={bodyTableStyles}>
                                {new Date(loan.date).toLocaleDateString()}
                            </td>

                            {/* STATUS */}
                            <td className={bodyTableStyles}>
                                <span
                                    className={
                                        loan.status === "Devuelto"
                                            ? "text-green-600 font-medium"
                                            : "text-yellow-600 font-medium"
                                    }
                                >
                                    {loan.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}

export default LoansTable;