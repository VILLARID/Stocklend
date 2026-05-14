import { UserRound, ShieldCheck, BadgeCheck } from "lucide-react";

function Step1Header() {
    return (
        <div className="mb-8">

            <div className="flex items-center gap-4 mb-5">

                <div className="w-16 h-16 rounded-[28px] bg-linear-to-br from-emerald-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-200/60">
                    <UserRound size={30} className="text-white" />
                </div>

                <div>

                    <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
                        Información del usuario
                    </h2>

                    <p className="text-sm text-gray-400 mt-1">
                        Completa los datos para continuar con el préstamo
                    </p>

                </div>

            </div>

            <div className="flex items-center gap-4">

                <div className="h-12 px-4 rounded-2xl bg-white border border-gray-200 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center">
                        <ShieldCheck size={16} className="text-emerald-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                        Datos requeridos
                    </span>
                </div>

                <div className="h-12 px-4 rounded-2xl bg-white border border-gray-200 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center">
                        <BadgeCheck size={16} className="text-emerald-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                        Nuevo registro
                    </span>
                </div>

            </div>

        </div>
    );
}

export default Step1Header;