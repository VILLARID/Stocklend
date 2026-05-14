function Step1Fields({ fields, formData, handleChange }) {
    return (
        <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-5">

            {fields.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.field}
                        className="rounded-[30px] border border-gray-200 bg-white p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition"
                    >

                        <div>

                            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-5">
                                <Icon size={20} className="text-emerald-600" />
                            </div>

                            <div className="mb-5">
                                <h3 className="text-base font-semibold text-gray-800">
                                    {item.label}
                                </h3>
                                <p className="text-sm text-gray-400 mt-1">
                                    Campo obligatorio
                                </p>
                            </div>

                        </div>

                        <input
                            value={formData?.[item.field] || ""}
                            onChange={(e) => handleChange(item.field, e.target.value)}
                            placeholder={item.placeholder}
                            className="w-full h-13 rounded-2xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition focus:bg-white focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                        />

                    </div>
                );
            })}

        </div>
    );
}

export default Step1Fields;