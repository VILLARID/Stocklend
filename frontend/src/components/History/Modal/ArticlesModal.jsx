import { Box, CheckCircle2 } from "lucide-react";

function ArticlesModal({ loan }) {

    if (!loan) return null;

    return (

        <div className="p-6 space-y-4">

            {loan.articles.map((item, index) => (

                <div
                    key={index}
                    className="
                        flex items-center justify-between
                        rounded-2xl
                        border border-gray-100
                        p-4
                        hover:bg-gray-50
                        transition
                    "
                >

                    <div className="flex items-center gap-4">

                        <div className="
                            w-14 h-14
                            rounded-2xl
                            bg-emerald-50
                            flex items-center justify-center
                            shrink-0
                        ">

                            <Box className="w-6 h-6 text-emerald-500" />

                        </div>

                        <div>

                            <p className="font-semibold text-gray-800">
                                {item.name}
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                                {item.cat}
                            </p>

                        </div>

                    </div>

                    <div className="
                        flex items-center gap-2
                        bg-emerald-50
                        text-emerald-600
                        px-3 py-2
                        rounded-xl
                        text-sm font-medium
                    ">

                        <CheckCircle2 className="w-4 h-4" />

                        {item.status}

                    </div>

                </div>

            ))}

        </div>

    );
}

export default ArticlesModal;