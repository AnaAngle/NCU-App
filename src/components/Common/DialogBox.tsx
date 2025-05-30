


import { useNavigate } from '@tanstack/react-router';
import { Bell } from 'flowbite-react-icons/outline';
import React from 'react';
import AlertDialogProps from '../interface/AlertDialogProps';


export const DialogBox: React.FC<AlertDialogProps> = ({ message, navigateTo, type }) => {
    const navigate = useNavigate();
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            const dialog = document.querySelector('dialog.modal') as HTMLDialogElement;
            if (dialog) dialog.close();
        }
    };

    return (
        <div className='z-10 bg-black' onKeyDown={handleKeyDown}>
            <dialog
                id="ncuapp_modal"
                className="modal"
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
            >
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="flex items-center justify-center">
                        <Bell />
                        <h3 id="dialog-title" className="font-bold text-2xl">通知</h3>
                    </div>
                    <p id="dialog-description" className="py-4 text-xl">{message}</p>

                    {type === 'alert' ? (
                        /* Alert Type Dialog Modal */
                        <div className="modal-action flex justify-center">
                            <form method="dialog" className="w-1/2">
                                {/* This button will close the dialog */}
                                <button className="btn w-full">好</button>
                            </form>
                        </div>
                    ) : (
                        /* Inquiry Type Dialog Modal */
                        < div className="modal-action flex justify-between">
                            <button
                                className="btn w-1/2"
                                onClick={() => navigate({ to: navigateTo })}
                            >
                                好
                            </button>
                            <form method="dialog" className="w-1/2">
                                {/* This button will close the dialog */}
                                <button className="btn w-full">取消</button>
                            </form>
                        </div>
                    )}
                </div>
            </dialog >
        </div >
    );
};
