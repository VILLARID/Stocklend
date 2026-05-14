import { useState } from "react";

import CreateLoanStep1 from "./CreateLoanStep1";
import CreateLoanStep2 from "./CreateLoanStep2"

function CreateLoan({ isOpen, onClose }) {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    dni: ""
  });

  if (!isOpen) return null;

  const handleClose = () => {

    setStep(1);

    setFormData({
      name: "",
      lastname: "",
      dni: ""
    });

    onClose();
  };

  return (
    <div className="
      fixed inset-0 z-50
      bg-black/40 backdrop-blur-sm
      flex items-center justify-center
      p-6
    ">

      <div className="
        w-full max-w-7xl h-[92vh]
        bg-[#f7f8fa]
        rounded-[36px]
        overflow-hidden
        shadow-2xl
        flex flex-col
      ">

        {/* HEADER */}
        <div className="
          h-24 shrink-0
          bg-white
          border-b border-gray-100
          px-10
          flex items-center justify-between
        ">

          {/* LEFT */}
          <div className="flex items-center gap-5">

            <div className="
              w-14 h-14 rounded-3xl
              bg-emerald-50
              flex items-center justify-center
              text-2xl
            ">
              📦
            </div>

            <div>

              <h1 className="text-2xl font-bold text-gray-800">
                Nuevo préstamo
              </h1>

              <p className="text-sm text-gray-400 mt-1">
                Registro de artículos y usuarios
              </p>

            </div>

          </div>

          {/* STEPS */}
          <div className="flex items-center gap-5">

            {[
              {
                id: 1,
                label: "Usuario"
              },
              {
                id: 2,
                label: "Artículos"
              }
            ].map((item, index) => (

              <div
                key={item.id}
                className="flex items-center gap-5"
              >

                <div className="flex items-center gap-3">

                  <div className={`
                    w-10 h-10 rounded-2xl
                    flex items-center justify-center
                    text-sm font-bold transition
                    ${step >= item.id
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-200 text-gray-500"
                    }
                  `}>
                    {item.id}
                  </div>

                  <span className={`
                    text-sm font-semibold
                    ${step >= item.id
                      ? "text-emerald-600"
                      : "text-gray-400"
                    }
                  `}>
                    {item.label}
                  </span>

                </div>

                {index !== 1 && (
                  <div className="
                    w-12 h-0.5
                    bg-gray-200
                    rounded-full
                  " />
                )}

              </div>

            ))}

          </div>

        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-hidden p-6">

          <div className="
            h-full
            rounded-4xl
            bg-white
            border border-gray-100
            overflow-hidden
          ">

            {step === 1 && (
              <CreateLoanStep1
                onNext={() => setStep(2)}
                onCancel={handleClose}
                formData={formData}
                setFormData={setFormData}
              />
            )}

            {step === 2 && (
              <CreateLoanStep2
                onBack={() => setStep(1)}
                onClose={handleClose}
                formData={formData}
              />
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default CreateLoan;