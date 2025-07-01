'use client';

import Modal from "./Modal";
import { useState } from "react";
import useSignupModal from "@/app/hooks/useSignupModal"
import CustomButton from '../components/forms/CustomButton';

const SignupModal = () => {
    const singupModal = useSignupModal()

    const content = (
        <>
            {/* <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please login in</h2> */}

            <form className="space-y-4">
                <input placeholder="Your e-mail address" type="email" className="w-full h-[54px] border border-gray-300 px-4 rounded-xl" />
                <input placeholder="Your password" type="password" className="w-full h-[54px] border border-gray-300 px-4 rounded-xl" />
                <input placeholder="Repear your password" type="password" className="w-full h-[54px] border border-gray-300 px-4 rounded-xl" />

                <div className="p-5 bg-[#ff385c] text-white rounded-xl opacity-80">The error message</div>

                <CustomButton
                    label="Submit"
                    onClick={() => console.log("hey")}/>
            </form>
        </>
    )

    return (
        <Modal
            isOpen={singupModal.isOpen}
            close={singupModal.close}
            label="Sign up"
            content={content}/>
    )
}

export default SignupModal;