'use client';
import CustomButton from "../forms/CustomButton";

export default function ConversationDetail() {
    return (
    <>
        <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
            <div className="w-[80%] py-4 px-5 rounded-xl bg-gray-200">
                <p className="font-bold text-gray-500">Daniel Kanybekov</p>
                <p>Nulla Lorem amet sit esse. Fugiat qui nisi aute qui est cupidatat fugiat. Cupidatat officia aliqua qui irure duis cillum deserunt minim. Occaecat occaecat culpa esse ad est minim ipsum. Eiusmod mollit quis occaecat ullamco aliqua dolore officia duis excepteur.</p>
            </div>

            <div className="w-[80%] ml-[20%] py-4 px-5 rounded-xl bg-blue-200">
                <p className="font-bold text-gray-500">Eldos Baktybek Uulu</p>
                <p>Nulla Lorem amet sit esse. Fugiat qui nisi aute qui est cupidatat fugiat. Cupidatat officia aliqua qui irure duis cillum deserunt minim. Occaecat occaecat culpa esse ad est minim ipsum. Eiusmod mollit quis occaecat ullamco aliqua dolore officia duis excepteur.</p>
            </div>
        </div>

        <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
            <input 
                type="text" 
                placeholder="Type your message..."
                className="w-full p-2 bg-gray-200 rounded-xl"/>

            <CustomButton
                label="Hola"
                onClick={() => console.log("collect")}
                className="max-w-[100px]"/>
        </div>
    </>
    )
}