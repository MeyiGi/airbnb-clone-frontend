'use client';

import { UserIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from "react";
import MenuLink from './MenuLink';
import useLoginModal from '@/app/hooks/useLoginModal';
import useSignupModal from '@/app/hooks/useSignupModal';



export default function UserNav() {
    const loginModal = useLoginModal();
    const singupModal = useSignupModal();
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="p-2 relative inline-block border border-gray-200 rounded-full">
            <button
                onClick={() => setIsOpen(!isOpen)} 
                className="flex items-center">
            <Bars3Icon className="w-6 h-6 cursor-pointer" />
            <UserIcon className="w-6 h-6 text-black cursor-pointer" />
            </button>

            {isOpen && (
                <div className='w-[220px] absolute top-[60px] right-0 bg-white border border-gray-200 rounded-xl shadow-md flex flex-col cursor-pointer'>
                    <MenuLink 
                        onClick={() => {
                            setIsOpen(false);
                            loginModal.open()
                        }}
                        label={'Login'}/>
                        
                    <MenuLink 
                        onClick={() => {
                            setIsOpen(false);
                            singupModal.open()
                        }}
                        label={'Sign up'}/>
                </div>
            )}
        </div>
    )
}