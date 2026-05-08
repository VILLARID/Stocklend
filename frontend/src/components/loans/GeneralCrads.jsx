import { ArrowLeftRight, CircleCheckBig, Package } from "lucide-react";

function GeneralCards() {

    const cardStyle = "flex flex-col items-start bg-white rounded-xl px-5 py-4 w-full max-w-sm shadow-sm";
    return (
        <>
            <div className={`${cardStyle}`}>
                <div className="flex justify-between w-full gap-2">
                    <p className="text-gray-500">Préstamos activos</p>
                    <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-blue-200">
                        <ArrowLeftRight className="text-blue-600" />
                    </div>
                </div>
                <p className="text-3xl font-bold">54</p>
            </div>

            <div className={`${cardStyle}`}>
                <div className="flex justify-between w-full gap-2">
                    <p className="text-gray-500">Devueltos hoy</p>
                    <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-green-200">
                        <CircleCheckBig className="text-green-600" />
                    </div>
                </div>
                <p className="text-3xl font-bold">12</p>
            </div>

            <div className={`${cardStyle}`}>
                <div className="flex justify-between w-full gap-2">
                    <p className="text-gray-500">Artículos disponibles</p>
                    <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-gray-200">
                        <Package className="text-gray-600" />
                    </div>
                </div>
                <p className="text-3xl font-bold">187</p>
            </div>
        </>
    )
}

export default GeneralCards;