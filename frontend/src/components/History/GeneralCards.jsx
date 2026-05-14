import { TrendingUp, Calendar, Award } from "lucide-react";

function GeneralCards() {

    const cardStyle = "flex flex-col items-start bg-white rounded-xl px-5 py-4 w-full max-w-sm shadow-sm";
    return (
        <>
            <div className={`${cardStyle}`}>
                <div className="flex justify-between w-full gap-2">
                    <p className="text-gray-500">Total de préstamos</p>
                    <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-blue-200">
                        <TrendingUp className="text-blue-600" />
                    </div>
                </div>
                <p className="text-3xl font-semibold">1,847</p>
            </div>

            <div className={`${cardStyle}`}>
                <div className="flex justify-between w-full gap-2">
                    <p className="text-gray-500">Préstamos este mes</p>
                    <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-green-200">
                        <Calendar className="text-green-600" />
                    </div>
                </div>
                <p className="text-3xl font-semibold">128</p>
            </div>

            <div className={`${cardStyle}`}>
                <div className="flex justify-between w-full">
                    <p className="text-gray-500">Artículo más prestado hoy</p>
                    <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-yellow-200">
                        <Award className="text-yellow-600" />
                    </div>
                </div>
                <p className="text-3xl font-semibold">Batidora</p>
            </div >
        </>
    )
}

export default GeneralCards;