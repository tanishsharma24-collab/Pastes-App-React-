import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Paste = () => {
    const pastes = useSelector((state) => state.paste.pastes);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const filteredData = pastes.filter((paste) =>
        paste.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (pasteId) => {
        dispatch(removeFromPastes(pasteId));
    };

    const handleShare = (pasteId) => {
        const url = `${window.location.origin}/pastes/${pasteId}`;
        navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!");
    };

    return (
        <div className="max-w-[1200px] mx-auto p-6 flex flex-col gap-5 w-full">
            <input
                className="p-3 rounded-lg bg-gray-800 text-white w-full border border-gray-700 outline-none focus:border-blue-500"
                type="search"
                placeholder="Search pastes by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="flex flex-col gap-4 mt-5">
                {filteredData.length > 0 ? (
                    filteredData.map((paste) => (
                        <div
                            key={paste?._id}
                            className="border border-gray-700 bg-gray-800 p-4 rounded-lg flex flex-col gap-3"
                        >
                            <div className="text-2xl font-bold text-blue-400">{paste.title}</div>
                            <div className="text-gray-300 max-h-24 overflow-hidden whitespace-pre-wrap">
                                {paste.content}
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-gray-700">
                                <div className="flex gap-3">
                                    <Link
                                        to={`/?pasteId=${paste?._id}`}
                                        className="px-3 py-1 bg-yellow-600 hover:bg-yellow-700 rounded text-sm text-white"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        to={`/pastes/${paste?._id}`}
                                        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm text-white"
                                    >
                                        View
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(paste?._id)}
                                        className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm text-white"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(paste?.content);
                                            toast.success("Copied to Clipboard");
                                        }}
                                        className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-sm text-white"
                                    >
                                        Copy
                                    </button>
                                    <button
                                        onClick={() => handleShare(paste?._id)}
                                        className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-sm text-white"
                                    >
                                        Share
                                    </button>
                                </div>
                                <div className="text-xs text-gray-400">
                                    {new Date(paste.createdAt).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    })}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-xl text-gray-500 py-10">No Pastes Found</div>
                )}
            </div>
        </div>
    );
};

export default Paste;