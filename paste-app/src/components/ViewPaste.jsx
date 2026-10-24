
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const ViewPaste = () => {
    const { id } = useParams();
    const allPastes = useSelector((state) => state.paste.pastes);
    const paste = allPastes.find((p) => p._id === id);

    if (!paste) {
        return <div className="text-center text-xl mt-10">Paste not found!</div>;
    }

    return (
        <div className="max-w-[1200px] mx-auto p-6 flex flex-col gap-5 w-full">
            <div className="flex flex-row gap-5 place-content-between">
                <input
                    className="p-3 rounded-lg bg-gray-800 text-white w-[80%] border border-gray-700 cursor-not-allowed"
                    type="text"
                    value={paste.title}
                    disabled
                />
                <button
                    onClick={() => {
                        navigator.clipboard.writeText(paste?.content);
                        toast.success("Copied to Clipboard");
                    }}
                    className="p-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium"
                >
                    Copy Content
                </button>
            </div>

            <div className="mt-4">
                <textarea
                    className="rounded-lg bg-gray-800 text-white w-full p-4 border border-gray-700 cursor-not-allowed"
                    value={paste.content}
                    disabled
                    rows={20}
                />
            </div>
        </div>
    );
};

export default ViewPaste;