import { Sparkles, BadgeCheck } from "lucide-react";

function Step1RightPanel() {
    const items = [
        "Nombre y apellido",
        "Documento o carnet",
        "Confirmación del préstamo"
    ];

    return (
        <div className="w-[320px] rounded-[34px] bg-linear-to-br from-emerald-500 to-emerald-400 p-7 text-white flex flex-col justify-between shadow-2xl shadow-emerald-200/70">

            <div>

                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center mb-2">
                    <Sparkles size={24} />
                </div>

                <h3 className="text-2xl font-bold leading-tight">
                    Registro rápido y organizado
                </h3>

                <p className="text-sm text-emerald-50/90 leading-relaxed mt-1">
                    Ingresa los datos del usuario para continuar con la selección de artículos.
                </p>

            </div>

            <div className="space-y-3 mt-2">

                {items.map((item) => (
                    <div
                        key={item}
                        className="h-10 rounded-2xl bg-white/10 border border-white/10 backdrop-blur px-2 flex items-center gap-4"
                    >

                        <div className="w-8 h-8 rounded-xl bg-white text-emerald-500 flex items-center justify-center shrink-0">
                            <BadgeCheck size={15} />
                        </div>

                        <span className="text-sm font-medium">
                            {item}
                        </span>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default Step1RightPanel;