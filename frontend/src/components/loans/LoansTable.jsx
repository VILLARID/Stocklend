function LoansTable({ loans, onSelectLoan }) {

    const headTableStyles = "px-6 py-5 font-medium text-gray-500 text-sm";
    const bodyTableStyles = "px-6 py-5 font-normal text-sm";

    return (
        <>
            <div>
                <table className="w-full text-left border-collapse shadow-md border border-gray-500 rounded-lg overflow-hidden">

                    {/* Header */}
                    <thead className="bg-gray-100">
                        <tr className="border-b border-gray-200">

                            <th className={headTableStyles}>USUARIO</th>
                            <th className={headTableStyles}>DNI</th>
                            <th className={headTableStyles}>ARTÍCULOS</th>
                            <th className={headTableStyles}>FECHA</th>

                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>

                        {loans.map((loan) => (

                            <tr
                                key={loan.id}
                                onClick={() => onSelectLoan(loan)}
                                className="border-b border-gray-200 hover:bg-gray-100 duration-300 cursor-pointer"
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
                                    {loan.date}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>
            </div>
        </>
    );
}

export default LoansTable;