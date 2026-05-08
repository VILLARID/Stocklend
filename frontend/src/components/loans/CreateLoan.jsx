import { useState } from "react";
import CreateLoanStep1 from "./CreateLoanStep1";
import CreateLoanStep2 from "./CreateLoanStep2";

function CreateLoan({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  if (!isOpen) return null;

  const handleClose = () => {
    setStep(1);
    setFormData({});
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 backdrop-blur-sm">

      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-xl flex flex-col overflow-hidden">

        {/* HEADER */}
        <div className="flex justify-between items-start px-8 py-6 border-b border-gray-100 shrink-0">

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Nuevo préstamo
            </h2>
            <p className="text-sm text-gray-400">
              Paso {step} de 2
            </p>
          </div>

          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ✕
          </button>

        </div>

        {/* BODY */}
        <div className="px-8 pt-6 pb-6 flex-1 min-h-0 overflow-hidden">

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
  );
}

export default CreateLoan;