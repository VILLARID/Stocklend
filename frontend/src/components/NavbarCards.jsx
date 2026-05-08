import { ArrowLeftRight, CircleCheckBig, CircleAlert } from "lucide-react";

function NavbarCards() {

    const cardStyle = "flex rounded-xl items-center py-2 px-5 gap-1 hover:scale-105 duration-200 cursor-pointer";
    return (
        <>
            <div className="flex gap-10">
                { /* Active */}
                <div className={`${cardStyle} bg-blue-100`}>
                    <ArrowLeftRight className=" w-5 h-5 text-blue-500" />
                    <div>
                        <div className="flex flex-col">
                            <p className="text-xs text-blue-900 font-semibold">Activos</p>
                            <p className="text-blue-800 font-semibold ">54</p>
                        </div>
                    </div>
                </div>

                { /* Available */}
                <div className={`${cardStyle} bg-green-100`}>
                    <CircleCheckBig className=" w-5 h-5 text-green-500" />
                    <div>
                        <div className="flex flex-col">
                            <p className="text-xs text-green-900 font-semibold">Disponibles</p>
                            <p className="text-green-800 font-semibold">187</p>
                        </div>
                    </div>
                </div>

                { /* In Use */}
                <div className={`${cardStyle} bg-red-100`}>
                    <CircleAlert className=" w-5 h-5 text-red-500" />
                    <div>
                        <div className="flex flex-col">
                            <p className="text-xs text-red-900 font-semibold">En Uso</p>
                            <p className="text-red-800 font-semibold">7</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarCards;