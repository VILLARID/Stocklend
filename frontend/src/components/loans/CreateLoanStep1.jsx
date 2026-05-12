// CreateLoanStep1.jsx

import {
  UserRound,
  IdCard,
  ArrowRight,
  X,
  ShieldCheck,
  BadgeCheck,
  Sparkles
} from "lucide-react";

function CreateLoanStep1({
  onNext,
  onCancel,
  formData,
  setFormData
}) {

  const handleChange = (field, value) =>
    setFormData({
      ...formData,
      [field]: value
    });

  const handleNext = () => {

    if (
      !formData.name ||
      !formData.lastname ||
      !formData.dni
    ) return;

    onNext();
  };

  const fields = [
    {
      label: "Nombre",
      field: "name",
      placeholder: "Ej: Farid",
      icon: UserRound
    },
    {
      label: "Apellido",
      field: "lastname",
      placeholder: "Ej: Villarroel",
      icon: UserRound
    },
    {
      label: "DNI o carnet",
      field: "dni",
      placeholder: "Ej: 74839210",
      icon: IdCard
    }
  ];

  return (
    <div className="
      h-full
      bg-[#fbfbfc]
      flex flex-col
      overflow-hidden
    ">

      {/* BODY */}
      <div className="
        flex-1
        p-8
        flex gap-8
        overflow-hidden
      ">

        {/* LEFT */}
        <div className="
          flex-1
          flex flex-col
          min-w-0
        ">

          {/* HEADER */}
          <div className="mb-8">

            <div className="
              flex items-center gap-4
              mb-5
            ">

              <div className="
                w-16 h-16 rounded-[28px]
                bg-linear-to-br from-emerald-500 to-emerald-400
                flex items-center justify-center
                shadow-lg shadow-emerald-200/60
              ">

                <UserRound
                  size={30}
                  className="text-white"
                />

              </div>

              <div>

                <h2 className="
                  text-3xl font-bold
                  text-gray-800
                  tracking-tight
                ">
                  Información del usuario
                </h2>

                <p className="
                  text-sm text-gray-400
                  mt-1
                ">
                  Completa los datos para continuar con el préstamo
                </p>

              </div>

            </div>

            {/* INFO */}
            <div className="
              flex items-center gap-4
            ">

              <div className="
                h-12 px-4 rounded-2xl
                bg-white border border-gray-200
                flex items-center gap-3
              ">

                <div className="
                  w-8 h-8 rounded-xl
                  bg-emerald-50
                  flex items-center justify-center
                ">

                  <ShieldCheck
                    size={16}
                    className="text-emerald-600"
                  />

                </div>

                <span className="
                  text-sm font-medium text-gray-700
                ">
                  Datos requeridos
                </span>

              </div>

              <div className="
                h-12 px-4 rounded-2xl
                bg-white border border-gray-200
                flex items-center gap-3
              ">

                <div className="
                  w-8 h-8 rounded-xl
                  bg-emerald-50
                  flex items-center justify-center
                ">

                  <BadgeCheck
                    size={16}
                    className="text-emerald-600"
                  />

                </div>

                <span className="
                  text-sm font-medium text-gray-700
                ">
                  Nuevo registro
                </span>

              </div>

            </div>

          </div>

          {/* FORM */}
          <div className="
            flex-1
            grid grid-cols-1 xl:grid-cols-3
            gap-5
          ">

            {fields.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.field}
                  className="
                    rounded-[30px]
                    border border-gray-200
                    bg-white
                    p-6
                    flex flex-col justify-between
                    shadow-sm
                    hover:shadow-lg
                    transition
                  "
                >

                  <div>

                    <div className="
                      w-12 h-12 rounded-2xl
                      bg-emerald-50
                      flex items-center justify-center
                      mb-5
                    ">

                      <Icon
                        size={20}
                        className="text-emerald-600"
                      />

                    </div>

                    <div className="mb-5">

                      <h3 className="
                        text-base font-semibold
                        text-gray-800
                      ">
                        {item.label}
                      </h3>

                      <p className="
                        text-sm text-gray-400
                        mt-1
                      ">
                        Campo obligatorio
                      </p>

                    </div>

                  </div>

                  <input
                    value={formData?.[item.field] || ""}
                    onChange={(e) =>
                      handleChange(item.field, e.target.value)
                    }
                    placeholder={item.placeholder}
                    className="
                      w-full h-13 rounded-2xl
                      border border-gray-200
                      bg-gray-50
                      px-4
                      text-sm
                      outline-none
                      transition
                      focus:bg-white
                      focus:border-emerald-400
                      focus:ring-4
                      focus:ring-emerald-100
                    "
                  />

                </div>
              );
            })}

          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="
          w-[320px]
          rounded-[34px]
          bg-linear-to-br from-emerald-500 to-emerald-400
          p-7
          text-white
          flex flex-col justify-between
          shadow-2xl shadow-emerald-200/70
        ">

          <div>

            <div className="
              w-14 h-14 rounded-2xl
              bg-white/15
              backdrop-blur
              flex items-center justify-center
              mb-2
            ">

              <Sparkles size={24} />

            </div>

            <h3 className="
              text-2xl font-bold
              leading-tight
            ">
              Registro rápido y organizado
            </h3>

            <p className="
              text-sm text-emerald-50/90
              leading-relaxed
              mt-1
            ">
              Ingresa los datos del usuario para continuar con la selección de artículos.
            </p>

          </div>

          <div className="space-y-3 mt-2">

            {[
              "Nombre y apellido",
              "Documento o carnet",
              "Confirmación del préstamo"
            ].map((item) => (

              <div
                key={item}
                className="
                  h-10 rounded-2xl
                  bg-white/10
                  border border-white/10
                  backdrop-blur
                  px-2
                  flex items-center gap-4
                "
              >

                <div className="
                  w-8 h-8 rounded-xl
                  bg-white
                  text-emerald-500
                  flex items-center justify-center
                  shrink-0
                ">

                  <BadgeCheck size={15} />

                </div>

                <span className="
                  text-sm font-medium
                ">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* FOOTER */}
      <div className="
        h-24 shrink-0
        bg-white
        border-t border-gray-100
        px-8
        flex items-center justify-between
      ">

        <p className="
          text-sm text-gray-400
        ">
          Todos los campos son obligatorios
        </p>

        <div className="
          flex items-center gap-4
        ">

          <button
            onClick={onCancel}
            className="
              h-12 px-6 rounded-2xl
              border border-gray-200
              text-sm font-medium text-gray-600
              hover:bg-gray-50
              transition
              flex items-center gap-2
            "
          >

            <X size={16} />

            Cancelar

          </button>

          <button
            onClick={handleNext}
            className="
              h-12 px-7 rounded-2xl
              bg-emerald-500 hover:bg-emerald-600
              text-white text-sm font-semibold
              transition
              flex items-center gap-2
              shadow-lg shadow-emerald-200/50
            "
          >

            Continuar

            <ArrowRight size={16} />

          </button>

        </div>

      </div>

    </div>
  );
}

export default CreateLoanStep1;