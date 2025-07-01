'use client';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import CloseIcon from "@/public/close.png"

interface ModalProps {
    label: string;
    close: () => void;
    content: React.ReactElement;
    isOpen: boolean;
}

const Modal: React.FC<ModalProps>  = ({
    label,
    content,
    isOpen,
    close,
}) => {

    const [showModal, setShowModal] = useState(isOpen)

    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])
    
    const handleClose = useCallback(() => {
        setShowModal(false);
        setTimeout(() => {
            close();
        }, 300)
    }, [close])
    if (!isOpen) {
        return null;
    } 
    return (
        <div className="flex items-center justify-center fixed inset-0 z-50 bg-black/60">
            <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 mx-auto h-auto" >
                <div className={`translate duration-600 h-full ${showModal ? 'translate-y-0 opacity-100' : 'translate-y-full'}  `}>
                    <div className="w-full h-auto rounded-xl relative flex flex-col bg-white">
                        <header className="h-[60px] flex items-center p-6 rounded-t  justify-center relative border-b border-gray-300">
                            <div className="p-3 absolute left-3 hover:bg-gray-300 rounded-full cursor-pointer hover:scale-110">
                                <Image src={CloseIcon} alt="Beach - Image" className=" object-cover transition h-5 w-5"/>
                            </div>

                            <h2 className="text-lg font-bold">{label}</h2>

                        </header>

                        <section className="p-8">
                            {content}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;