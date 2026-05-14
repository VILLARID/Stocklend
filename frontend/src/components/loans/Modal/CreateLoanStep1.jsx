import { UserRound, IdCard } from "lucide-react";

import Step1Header from "./Step1Modal/Step1Header";
import Step1Fields from "./Step1Modal/Step1Fields";
import Step1RightPanel from "./Step1Modal/Step1RightPanel";
import Step1Footer from "./Step1Modal/Step1Footer";

function CreateLoanStep1({ onNext, onCancel, formData, setFormData }) {

    const handleChange = (field, value) =>
        setFormData({ ...formData, [field]: value });

    const handleNext = () => {
        if (!formData.name || !formData.lastname || !formData.dni) return;
        onNext();
    };

    const fields = [
        { label: "Nombre", field: "name", placeholder: "Ej: Farid", icon: UserRound },
        { label: "Apellido", field: "lastname", placeholder: "Ej: Villarroel", icon: UserRound },
        { label: "DNI o carnet", field: "dni", placeholder: "Ej: 74839210", icon: IdCard }
    ];

    return (
        <div className="h-full bg-[#fbfbfc] flex flex-col overflow-hidden">

            <div className="flex-1 p-8 flex gap-8 overflow-hidden">

                <div className="flex-1 flex flex-col min-w-0">

                    <Step1Header />

                    <Step1Fields
                        fields={fields}
                        formData={formData}
                        handleChange={handleChange}
                    />

                </div>

                <Step1RightPanel />

            </div>

            <Step1Footer
                onCancel={onCancel}
                handleNext={handleNext}
            />

        </div>
    );
}

export default CreateLoanStep1;