import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
    const [title, setTitle] = useState('');//track title input box value   -> TITLE OF PASTE
    const [value, setValue] = useState('');//track textaria contineent value -> content OF PASTE
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes);

    //cretae ki req aana par input boxes ko empty rkhga and edit ki req aana par title and contentboxes alredy prev values sa filled honga
    useEffect(() => {
        if (pasteId) {
            const paste = allPastes.find((p) => p._id === pasteId);
            if (paste) {
                setTitle(paste.title);
                setValue(paste.content);
            }
        }
    }, [pasteId, allPastes]);

    //ya to create ya edit req aaygi
    const createPaste = () => {
        if (!title.trim() || !value.trim()) {
            alert("Title aur Content dono bharna zaroori hai!");
            return;
        }

        const paste = {
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),// create req aana par oldID use hogi , edit req aaygi to new id create krunga
            createdAt: new Date().toISOString(),
        };

        if (pasteId) {//edit req
            dispatch(updateToPastes(paste));
        } else {//create req
            dispatch(addToPastes(paste));
        }

        // Clean fields
        setTitle('');
        setValue('');
        setSearchParams({});
    };

    return (
        <div className="max-w-[1200px] mx-auto p-6 flex flex-col gap-5 w-full">
            <div className="flex flex-row gap-5 place-content-between">
                <input
                    className="p-3 rounded-lg bg-gray-800 text-white w-[80%] border border-gray-700 outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Enter title here"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button
                    onClick={createPaste}
                    className="p-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium"
                >
                    {pasteId ? "Update My Paste" : "Create My Paste"}
                </button>
            </div>

            <div className="mt-4">
                <textarea
                    className="rounded-lg bg-gray-800 text-white w-full p-4 border border-gray-700 outline-none focus:border-blue-500"
                    value={value}
                    placeholder="Enter content here..."
                    onChange={(e) => setValue(e.target.value)}
                    rows={20}
                />
            </div>
        </div>
    );
};

export default Home;